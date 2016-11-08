"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koahubjs = require("koahubjs");

var _koahubjs2 = _interopRequireDefault(_koahubjs);

var _koaHbs = require("koa-hbs");

var _koaHbs2 = _interopRequireDefault(_koaHbs);

var _koaConvert = require("koa-convert");

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koahubjs2.default();
var koa = app.getKoa();

koa.use((0, _koaConvert2.default)(_koaHbs2.default.middleware({
    extname: '.html',
    viewPath: './www'
})));

koa.use(function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
        var render;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        render = ctx.render;

                        ctx.render = function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                                var _args = arguments;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                return _context.abrupt("return", _co2.default.call(ctx, render.apply(ctx, _args)));

                                            case 1:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, this);
                            }));

                            function _convertedRender() {
                                return _ref2.apply(this, arguments);
                            }

                            return _convertedRender;
                        }();
                        _context2.next = 4;
                        return next();

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

app.run();