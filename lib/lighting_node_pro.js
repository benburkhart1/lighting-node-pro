"use strict";
const usb = require('usb');

const LLFan = require('./ll_fan.js');

const animations = require('./animations.js');

module.exports = class LightingNodePro {
    constructor(usbDevice) {
        this.usbDevice  = usbDevice;
        this.iface = null;
        this.outEndpoint = null;
        this.inEndpoint  = null;

        this.debug = false;

        this.kernelDriverWasAttached = false;
        this.devices = [];

        this.exitLoop = false;
    }

    resetDevice() {
        return new Promise((resolve, reject) => {
            this.usbDevice.reset(err => {
                console.log("Device reset");
                if (err)
                    return reject(err);

                return resolve();
            });
        });
    }

    async initialize(numFans, debug, reset) {
        this.debug = debug || false;

        this.numDevices      = numFans;
        this.numDevicesShort = parseInt(numFans)<<4;

        for (let i = 0; i < this.numDevices; i++) {
            let dev = new LLFan();
            this.devices.push(dev);

            dev.setFramerate(1);
        }

        console.log("Opening USB port.");
        this.usbDevice.open();

        if (reset) {
            console.log("Resetting device");
            await this.resetDevice();

            console.log("Waiting for 2 seconds.");
            await this.delay(2000);

            console.log("Opening USB port again.");
            this.usbDevice.open();
        }

        this.iface = this.usbDevice.interface(0);

        if (this.iface.isKernelDriverActive()) {
            console.log("Detaching kernel driver");
            this.kernelDriverWasAttached = true;
            this.iface.detachKernelDriver();
        }

        console.log("Claiming interface.");
        this.iface.claim();

        this.outEndpoint = this.iface.endpoint(1);
    }


    async sendPreamble() {
        if (this.debug)
            console.log("Sending preamble");

        await this.sendPkt([0x37]);

        // 0x35 - init
        await this.sendPkt([0x35, 0x00, 0x00, this.numDevicesShort, 0x00, 0x01, 0x01]);
        await this.sendPkt([0x3b, 0x00, 0x01]);
        await this.sendPkt([0x38, 0x00, 0x02]);
        await this.sendPkt([0x34]);
        await this.sendPkt([0x37, 0x01]);
        await this.sendPkt([0x34, 0x01]);
        await this.sendPkt([0x38, 0x01, 0x01]);
        await this.sendPkt([0x33, 0xff]);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    prettyPrint(byteArray) {
        let chq = byteArray; //this.make64(byteArray);
        console.log(`[${chq.map(bv => `'${bv.toString(16)}'`).join(', ')}]`);
    };

    setColors() {
        // s, t, u are R, G, B extended for fans 3-6
        ['r', 'g', 'b', 's', 't', 'u'].forEach(cval => {
            let bytes = [];

            if (['r','g','b'].indexOf(cval) !== -1) {
                bytes.push(0x32);
                bytes.push(0x00);
                bytes.push(0x00);
                bytes.push(0x32);

                if (cval == 'r')
                    bytes.push(0x00);
                else if (cval == 'g')
                    bytes.push(0x01);
                else if (cval == 'b')
                    bytes.push(0x02);

                for (let i = 0; i < this.numDevices && i < 3; i++) {
                    bytes = bytes.concat(this.devices[i].getFrame()[cval]);
                }

                // If we have 4 or more fans, we need to take 2 bytes from the 4th fan and put
                // it on this message.
                if (this.numDevices > 3) {
                    bytes = bytes.concat(this.devices[3].getFrame()[cval].slice(0, 3));
                }
            } else {
                bytes.push(0x32);
                bytes.push(0x00);
                bytes.push(0x32);
                bytes.push(0x2e);

                let check;

                if (cval == 's') {
                    bytes.push(0x00);
                    check = 'r';
                }
                else if (cval == 't') {
                    bytes.push(0x01);
                    check = 'g';
                }
                else if (cval == 'u') {
                    bytes.push(0x02);
                    check = 'b';
                }

                if (this.numDevices > 3) {
                    // Continuation of 4th fan from r/g/b runs
                    bytes = bytes.concat(this.devices[3].getFrame()[check].slice(3));

                    for (let i = 4; i < this.numDevices && i < 6; i++) {
                        bytes = bytes.concat(this.devices[i].getFrame()[check]);
                    }
                }
            }

            this.sendPkt(bytes);
        });
    }


    sendPkt(byteArray) {
        if (this.debug)
            this.prettyPrint(byteArray);

        let fullByteArray = this.make64(byteArray);

        return new Promise((resolve, reject) => {
            this.outEndpoint.transfer(Buffer.from(fullByteArray), err => {
                if (err) {
                    return reject(err);
                }

                return resolve();
            });
        });
    }

    make64(byteArray) {
        while (byteArray.length < 64) {
            byteArray.push(0x00);
        }

        return byteArray;
    }

    async loop() {
        await this.sendPreamble();

        while (!this.exitLoop) {
            if (this.devices.some(d => d.changed)) {
                await this.setColors();
            }

            await this.sendPkt([0x33, 0xff]);
        }
    }

    async shutdown() {
        this.numDevices = 0;
        this.numDevicesShort = 0;

        await this.sendPreamble();
        //        await this.setColors();
        //await this.sendPkt([0x33, 0xff]);

        // Reattach like a nice program
        // if we detached it.
        if (this.kernelDriverWasAttached) {
            this.iface.attachKernelDriver();
        }

        return new Promise((resolve, reject) => {
            this.iface.release(true, err => {
                if (err) {
                    console.error(err);
                    return reject(err);
                }

                this.usbDevice.close();
                return resolve();
            });
        });
    }
}
