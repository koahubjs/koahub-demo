const md5 = require('md5');
const got = require('got');
const lodash = require('lodash');

module.exports = {

    add(a, b) {
        return a + b;
    },

    md5,

    curl: got,

    lodash: lodash
}
