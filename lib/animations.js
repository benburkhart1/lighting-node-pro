"use strict";

const qs = require('querystring');

const frames = require('./frames.js');

module.exports.Tracer = (devices, params) => {
    let pp = qs.parse(params || "");

    let primaryColor   = 'red';
    let secondaryColor = 'black';

    if (pp.colors) {
        let colors = pp.colors.split(',');

        if (colors.length > 0)
            primaryColor = colors[0];
        if (colors.length > 1)
            secondaryColor = colors[1];
    }

    let toReverse = [];
    if (pp.reverse) {
        toReverse = pp.reverse.split(',').map(f => ~~f);
    }

    let fpsa = [];
    if (pp.fps) {
        fpsa = pp.fps.split(',').map(f => ~~f);
    }

    // 12 frames
    let ev = [
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: primaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: primaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: primaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: primaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: primaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: primaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: primaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: primaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: primaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: primaryColor,
            tenOClock: secondaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: primaryColor,
        }),
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: primaryColor,
            twelveOClock: secondaryColor,
            oneOClock: secondaryColor,
            twoOClock: secondaryColor,
            threeOClock: secondaryColor,
            fourOClock: secondaryColor,
            fiveOClock: secondaryColor,
            sixOClock: secondaryColor,
            sevenOClock: secondaryColor,
            eightOClock: secondaryColor,
            nineOClock: secondaryColor,
            tenOClock: secondaryColor,
        }),
    ];

    devices.forEach((dev, i) => {
        let stack = ev.slice(0);

        if (toReverse.indexOf(i) !== -1) {
            stack = frames.flipFrames(stack);
        }

        if (fpsa[i%fpsa.length]) {
            dev.setFramerate(fpsa[i%fpsa.length]);
        }

        dev.eventStack = stack;
    });
};

module.exports.ColorWheel = (devices, params) => {
    let pp = qs.parse(params || "");

    let primaryColor   = 'blue';
    let secondaryColor = 'white';

    if (pp.colors) {
        let colors = pp.colors.split(',');

        if (colors.length > 0)
            primaryColor = colors[0];
        if (colors.length > 1)
            secondaryColor = colors[1];
    }

    let fpsa = [];
    if (pp.fps) {
        fpsa = pp.fps.split(',').map(f => ~~f);
    }

    let ev = [
        frames.descriptiveToFrame({
            topInner: primaryColor,
            bottomInner: primaryColor,
            rightInner: secondaryColor,
            leftInner: secondaryColor,

            elevenOClock: primaryColor,
            twelveOClock: secondaryColor,
            oneOClock: primaryColor,
            twoOClock: secondaryColor,
            threeOClock: primaryColor,
            fourOClock: secondaryColor,
            fiveOClock: primaryColor,
            sixOClock: secondaryColor,
            sevenOClock: primaryColor,
            eightOClock: secondaryColor,
            nineOClock: primaryColor,
            tenOClock: secondaryColor,

        }),
        frames.descriptiveToFrame({
            topInner: secondaryColor,
            bottomInner: secondaryColor,
            rightInner: primaryColor,
            leftInner: primaryColor,

            elevenOClock: secondaryColor,
            twelveOClock: primaryColor,
            oneOClock: secondaryColor,
            twoOClock: primaryColor,
            threeOClock: secondaryColor,
            fourOClock: primaryColor,
            fiveOClock: secondaryColor,
            sixOClock: primaryColor,
            sevenOClock: secondaryColor,
            eightOClock: primaryColor,
            nineOClock: secondaryColor,
            tenOClock: primaryColor,
        }),
    ];

    devices.forEach((dev, i) => {
        dev.eventStack = frames.flipFrames(ev.slice(0));

        if (fpsa[i%fpsa.length]) {
            dev.setFramerate(fpsa[i%fpsa.length]);
        }

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
