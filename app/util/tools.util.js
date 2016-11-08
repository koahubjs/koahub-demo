"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
exports.dis = dis;
exports.default = {

    add: function add(a, b) {
        console.log(a + b);
        return a + b;
    },

    dis: function dis(a, b) {
        console.log(a - b);
        return a - b;
    }
};
function add(a, b) {
    console.log(a + b);
    return a + b;
}

function dis(a, b) {
    console.log(a - b);
    return a - b;
}