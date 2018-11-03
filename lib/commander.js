"use strict";

const usb = require('usb');

const LightingNodePro = require('./lighting_node_pro.js');

module.exports = class Commander {
    constructor() {
    }

    scanForController(bus, address) {
        let devices = usb.getDeviceList();

        let foundDevices = devices.filter(d => {
            return d.deviceDescriptor.idVendor === 0x1b1c && d.deviceDescriptor.idProduct === 0x0c0b;
        });

        let devStrings = foundDevices.map(d => `(Bus ${d.busNumber} Address ${d.deviceAddress})`);

        if (devStrings.length > 0) {
            console.log(`Found devices on ${devStrings.join(', ')}`);
        }

        let target = foundDevices.find(dev => ((!bus && !address) || (dev.busNumber == bus || dev.deviceAddress == address)));

        if (target) {
            console.log(`Found Lighting Node Pro (1b1c:0c0b)`);
            return new LightingNodePro(target);
        }

        return null;
    }
};
