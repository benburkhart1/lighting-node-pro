"use strict";

let rgbColor = require('rgb-color');

const flipFrame = module.exports.flipFrame = frame => {
    let nf = {
        r: Array(16),
        g: Array(16),
        b: Array(16),
    };

    ['r', 'g', 'b'].forEach(color => {
        for (let i = 0; i < frame[color].length; i++) {
            // Inner ring
            if (i < 4) {
                nf[color][i] = frame[color][(i+2)%4];
            }
            else {
                nf[color][i] = frame[color][(((i-4)+6)%12)+4];
            }
        }
    });

    return nf;
};


module.exports.flipFrames = frameArray => frameArray.map(flipFrame);

module.exports.descriptiveToFrame = (obj) => {
    return {
        r: [
            obj.topInner     && rgbColor(obj.topInner).r     || 0x00,   //  0 topInner
            obj.leftInner    && rgbColor(obj.leftInner).r    || 0x00,   //  1 leftInner
            obj.bottomInner  && rgbColor(obj.bottomInner).r  || 0x00,   //  2 bottomInner
            obj.rightInner   && rgbColor(obj.rightInner).r   || 0x00,   //  3 rightInner
            obj.tenOClock    && rgbColor(obj.tenOClock).r    || 0x00,   //  4 tenOClock
            obj.nineOClock   && rgbColor(obj.nineOClock).r   || 0x00,   //  5 nineOClock
            obj.eightOClock  && rgbColor(obj.eightOClock).r  || 0x00,   //  6 eightOClock
            obj.sevenOClock  && rgbColor(obj.sevenOClock).r  || 0x00,   //  7 sevenOClock
            obj.sixOClock    && rgbColor(obj.sixOClock).r    || 0x00,   //  8 sixOClock
            obj.fiveOClock   && rgbColor(obj.fiveOClock).r   || 0x00,   //  9 fiveOClock
            obj.fourOClock   && rgbColor(obj.fourOClock).r   || 0x00,   // 10 fourOClock
            obj.threeOClock  && rgbColor(obj.threeOClock).r  || 0x00,   // 11 threeOClock
            obj.twoOClock    && rgbColor(obj.twoOClock).r    || 0x00,   // 12 twoOClock
            obj.oneOClock    && rgbColor(obj.oneOClock).r    || 0x00,   // 13 oneOClock
            obj.twelveOClock && rgbColor(obj.twelveOClock).r || 0x00,   // 14 twelveOClock
            obj.elevenOClock && rgbColor(obj.elevenOClock).r || 0x00,   // 15 elevenOClock
        ],
        g: [
            obj.topInner     && rgbColor(obj.topInner).g     || 0x00,   //  0 topInner
            obj.leftInner    && rgbColor(obj.leftInner).g    || 0x00,   //  1 leftInner
            obj.bottomInner  && rgbColor(obj.bottomInner).g  || 0x00,   //  2 bottomInner
            obj.rightInner   && rgbColor(obj.rightInner).g   || 0x00,   //  3 rightInner
            obj.tenOClock    && rgbColor(obj.tenOClock).g    || 0x00,   //  4 tenOClock
            obj.nineOClock   && rgbColor(obj.nineOClock).g   || 0x00,   //  5 nineOClock
            obj.eightOClock  && rgbColor(obj.eightOClock).g  || 0x00,   //  6 eightOClock
            obj.sevenOClock  && rgbColor(obj.sevenOClock).g  || 0x00,   //  7 sevenOClock
            obj.sixOClock    && rgbColor(obj.sixOClock).g    || 0x00,   //  8 sixOClock
            obj.fiveOClock   && rgbColor(obj.fiveOClock).g   || 0x00,   //  9 fiveOClock
            obj.fourOClock   && rgbColor(obj.fourOClock).g   || 0x00,   // 10 fourOClock
            obj.threeOClock  && rgbColor(obj.threeOClock).g  || 0x00,   // 11 threeOClock
            obj.twoOClock    && rgbColor(obj.twoOClock).g    || 0x00,   // 12 twoOClock
            obj.oneOClock    && rgbColor(obj.oneOClock).g    || 0x00,   // 13 oneOClock
            obj.twelveOClock && rgbColor(obj.twelveOClock).g || 0x00,   // 14 twelveOClock
            obj.elevenOClock && rgbColor(obj.elevenOClock).g || 0x00,   // 15 elevenOClock
        ],
        b: [
            obj.topInner     && rgbColor(obj.topInner).b     || 0x00,   //  0 topInner
            obj.leftInner    && rgbColor(obj.leftInner).b    || 0x00,   //  1 leftInner
            obj.bottomInner  && rgbColor(obj.bottomInner).b  || 0x00,   //  2 bottomInner
            obj.rightInner   && rgbColor(obj.rightInner).b   || 0x00,   //  3 rightInner
            obj.tenOClock    && rgbColor(obj.tenOClock).b    || 0x00,   //  4 tenOClock
            obj.nineOClock   && rgbColor(obj.nineOClock).b   || 0x00,   //  5 nineOClock
            obj.eightOClock  && rgbColor(obj.eightOClock).b  || 0x00,   //  6 eightOClock
            obj.sevenOClock  && rgbColor(obj.sevenOClock).b  || 0x00,   //  7 sevenOClock
            obj.sixOClock    && rgbColor(obj.sixOClock).b    || 0x00,   //  8 sixOClock
            obj.fiveOClock   && rgbColor(obj.fiveOClock).b   || 0x00,   //  9 fiveOClock
            obj.fourOClock   && rgbColor(obj.fourOClock).b   || 0x00,   // 10 fourOClock
            obj.threeOClock  && rgbColor(obj.threeOClock).b  || 0x00,   // 11 threeOClock
            obj.twoOClock    && rgbColor(obj.twoOClock).b    || 0x00,   // 12 twoOClock
            obj.oneOClock    && rgbColor(obj.oneOClock).b    || 0x00,   // 13 oneOClock
            obj.twelveOClock && rgbColor(obj.twelveOClock).b || 0x00,   // 14 twelveOClock
            obj.elevenOClock && rgbColor(obj.elevenOClock).b || 0x00,   // 15 elevenOClock
        ],
    };
};

module.exports.colorfulFrame = () => {
    return {
        r: [
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff
        ],
        g: [
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00
        ],
        b: [
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00,
            0x00,
            0xff,
            0x00
        ],
    };
};


module.exports.blankFrame = () => {
    return {
        r: [
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
    };
};

module.exports.staticColorFrame = (rgb) => {
    let frame = {};

    frame.r = Array(16).fill(rgb.r);
    frame.g = Array(16).fill(rgb.g);
    frame.b = Array(16).fill(rgb.b);

    return frame;
}

