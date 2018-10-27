"use strict";

const usb = require('usb');

const LightingNodePro = require('./lighting_node_pro.js');

module.exports = class Commander {
    constructor() {
    }

    scanForController() {
        // Lighting Node Pro
        let dev = usb.findByIds(0x1b1c, 0x0c0b);

        if (dev) {
            console.log(`Found Lighting Node Pro (1b1c:0c0b)`);
            return new LightingNodePro(dev);
        }

        return null;
    }
};
