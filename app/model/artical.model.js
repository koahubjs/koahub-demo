"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require("./../data/mysql.init");

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = _mysql2.default.Model.extend({
    tableName: 'artical',
    hasTimestamps: true
});

exports.default = model;