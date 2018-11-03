"use strict";

const cmdlineArgs = require('command-line-args');
const rgbColor    = require('rgb-color');

const Commander   = require('./lib/commander.js');
const frames      = require('./lib/frames.js');
const animations  = require('./lib/animations.js');

const options = cmdlineArgs([
    {
        name: 'fan-count', alias: 'f', type: Number,
    },
    {
        name: 'framerate', alias: 'r',
    },
    {
        name: 'animation', alias: 'a',
    },
    {
        name: 'bus', alias: 'b', type: Number
    },
    {
        name: 'address', alias: 's', type: Number
    },
    {
        name: 'params', alias: 'p',
    },
    {
        name: 'colors', alias: 'c'
    },
    {
        name: 'off', alias: 'o',
    },
    {
        name: 'debug', alias: 'd', type: Boolean
    },
    {
        name: 'reset', alias: 'x', type: Boolean
    },
]);


const run = async () => {
    let cmd = new Commander();
    let controller = cmd.scanForController(options['bus'], options['address']);

    // Initialize with 3 fans
    await controller.initialize(options['fan-count'], options['debug'], options['reset']);

    let sigIntCnt = 0;

    process.on('SIGINT', () => {
        if (sigIntCnt > 0) {
            console.log("Could not exit cleanly.");
            process.exit(1);
        }

        console.log("SIGINT: please press kill again to force exit if it doesn't exit within a few seconds.");
        sigIntCnt++;

        controller.exitLoop = true;

        controller.shutdown()
            .then(() => {
                console.log(`Successfully exited`);
                process.exit(0);
            })
    });

    if (!options.colors) {
        controller.devices.forEach(dev => dev.eventStack = [frames.descriptiveToFrame({
            topInner: 'red',
            bottomInner: 'red',
            rightInner: 'red',
            leftInner: 'red',

            elevenOClock: 'blue',
            twelveOClock: 'red',
            oneOClock: 'blue',
            twoOClock: 'red',
            threeOClock: 'blue',
            fourOClock: 'red',
            fiveOClock: 'blue',
            sixOClock: 'red',
            sevenOClock: 'blue',
            eightOClock: 'red',
            nineOClock: 'blue',
            tenOClock: 'red',

        })]);
    }
    else {
        let colors = options.colors.split(',');

        if (colors.length > 1) {
            for (let i = 0; i < options['fan-count']; i++) {
                let color = rgbColor(colors[i % colors.length]);
                let dev = controller.devices[i].eventStack = [frames.staticColorFrame(color)];
            }
        }
        else {
            let color = rgbColor(colors[0]);

            controller.devices.forEach(dev => dev.eventStack = [frames.staticColorFrame(color)]);
        }

    }

    if (options.animation) {
        if (!animations[options.animation]) {
            console.error(`Could not find animation ${options.animation}`);
            return process.exit(1);
        }

        animations[options.animation](controller.devices, options['params'])
    }

    if (options.framerate) {
        for (let i = 0; i < options['fan-count']; i++) {
            controller.devices[i].setFramerate(options.framerate);
        }
    }

    // Enter loop
    controller.loop();
};

run();
