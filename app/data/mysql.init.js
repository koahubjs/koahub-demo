"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knex = require("knex");

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = require("bookshelf");

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _db = require("./../config/db.config");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var knex = new _knex2.default({
    client: 'mysql',
    connection: _db2.default
});

var bookshelf = new _bookshelf2.default(knex);
bookshelf.plugin('pagination');

exports.default = bookshelf;