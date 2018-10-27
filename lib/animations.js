"use strict";

const frames = require('./frames.js');


module.exports.ColorWheel = (devices) => {
    let ev = [
        frames.descriptiveToFrame({
            /*
            topInner: 'red',
            bottomInner: 'red',
            rightInner: 'red',
            leftInner: 'red',
            */

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

        }),
        frames.descriptiveToFrame({
            /*
            topInner: 'red',
            bottomInner: 'red',
            rightInner: 'red',
            leftInner: 'red',
            */

            elevenOClock: 'red',
            twelveOClock: 'blue',
            oneOClock: 'red',
            twoOClock: 'blue',
            threeOClock: 'red',
            fourOClock: 'blue',
            fiveOClock: 'red',
            sixOClock: 'blue',
            sevenOClock: 'red',
            eightOClock: 'blue',
            nineOClock: 'red',
            tenOClock: 'blue',
        }),
    ];

    devices.forEach(dev => {
        dev.eventStack = ev.slice(0);
    });
};

module.exports.StopLight = (devices) => {
    let ev1 = [
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 255,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 255,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 255,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 255,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 255,
            g: 0,
            b: 0,
        }),
    ];

    let ev2 = [
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 255,
            g: 255,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 255,
            g: 255,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
    ];

    let ev3 = [
        frames.staticColorFrame({
            r: 0,
            g: 255,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 255,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 255,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 0,
        }),
    ];

    if (devices.length >= 1)
        devices[0].eventStack  = ev1;
    if (devices.length >= 2)
        devices[1].eventStack = ev2;
    if (devices.length >= 3)
        devices[2].eventStack  = ev3;
};


// 3 frame animation for 3 fans where a red circle meets
// a blue circle and becomes purple, really looks pink
module.exports.RedBlueCollision = (devices) => {
    let ev1 = [
        frames.staticColorFrame({
            r: 255,
            g: 0,
            b: 0,
        }),
        frames.blankFrame(),
        frames.blankFrame(),
    ];

    let ev2 = [
        frames.blankFrame(),
        {
            r: [
                0xff,
                0xff,
                0x00,
                0xff,
                0xff,
                0xff,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0xff,
                0xff,
                0xff,
                0xff,
                0xff
            ],
            g: [
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00
            ],
            b: [
                0x00,
                0xff,
                0xff,
                0xff,
                0x00,
                0xff,
                0xff,
                0xff,
                0xff,
                0xff,
                0xff,
                0xff,
                0x00,
                0x00,
                0x00,
                0x00
            ],
        },
        frames.staticColorFrame({
            r: 255,
            g: 0,
            b: 255
        })
    ];

    let ev3 = [
        frames.staticColorFrame({
            r: 0,
            g: 0,
            b: 255,
        }),
        frames.blankFrame(),
        frames.blankFrame(),
    ];

    if (devices.length >= 1)
        devices[0].eventStack  = ev1;
    if (devices.length >= 2)
        devices[1].eventStack = ev2;
    if (devices.length >= 3)
        devices[2].eventStack  = ev3;
};
