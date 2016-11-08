'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * model常用方法
 * @param model
 * @param options
 * @returns {{model: model, handle: handle, add: add, del: del, get: get, getList: getList, getCount: getCount, getPageList: getPageList, getQueryList: getQueryList, getQueryCount: getQueryCount}}
 */

function _default(_model, options) {

    var pageNum = 25;

    _model = koahub.models[_model];
    options = options || {};

    return {
        model: function model() {
            return _model;
        },
        handle: function handle(data) {
            if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object' && data != null) {
                return data.toJSON();
            }
            return data;
        },
        add: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!data.id) {
                                    delete data.id;
                                }
                                _context.next = 3;
                                return _model.forge(data).save();

                            case 3:
                                data = _context.sent;
                                return _context.abrupt('return', this.handle(data));

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function add(_x) {
                return _ref.apply(this, arguments);
            }

            return add;
        }(),
        del: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(condition) {
                var data;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _model.forge(condition).destroy();

                            case 2:
                                data = _context2.sent;
                                return _context2.abrupt('return', this.handle(data));

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function del(_x2) {
                return _ref2.apply(this, arguments);
            }

            return del;
        }(),
        get: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(condition) {
                var data;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _model.query({ where: condition }).fetch(options);

                            case 2:
                                data = _context3.sent;
                                return _context3.abrupt('return', this.handle(data));

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function get(_x3) {
                return _ref3.apply(this, arguments);
            }

            return get;
        }(),
        getList: function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(condition) {
                var data;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _model.query({ where: condition }).fetchAll(options);

                            case 2:
                                data = _context4.sent;
                                return _context4.abrupt('return', this.handle(data));

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getList(_x4) {
                return _ref4.apply(this, arguments);
            }

            return getList;
        }(),
        getCount: function () {
            var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(condition) {
                var data;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _model.query({ where: condition }).count();

                            case 2:
                                data = _context5.sent;
                                return _context5.abrupt('return', this.handle(data));

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getCount(_x5) {
                return _ref5.apply(this, arguments);
            }

            return getCount;
        }(),
        getPageList: function () {
            var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(page, callback, option) {
                var data;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                if (option != undefined && option.pageNum != undefined) {
                                    pageNum = option.pageNum;
                                }

                                _context6.next = 3;
                                return _model.query(function (qb) {
                                    if (typeof callback === 'function') {
                                        callback(qb);
                                    }

                                    qb.orderBy('id', 'desc');
                                }).fetchPage({
                                    pageSize: pageNum,
                                    page: page,
                                    withRelated: options.withRelated
                                });

                            case 3:
                                data = _context6.sent;
                                return _context6.abrupt('return', {
                                    data: this.handle(data),
                                    pagination: data.pagination
                                });

                            case 5:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getPageList(_x6, _x7, _x8) {
                return _ref6.apply(this, arguments);
            }

            return getPageList;
        }(),
        getQueryList: function () {
            var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(callback) {
                var data;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return _model.query(function (qb) {
                                    if (typeof callback === 'function') {
                                        callback(qb);
                                    }

                                    qb.orderBy('id', 'desc');
                                }).fetchAll(options);

                            case 2:
                                data = _context7.sent;
                                return _context7.abrupt('return', this.handle(data));

                            case 4:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function getQueryList(_x9) {
                return _ref7.apply(this, arguments);
            }

            return getQueryList;
        }(),
        getQueryCount: function () {
            var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(callback) {
                var data;
                return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.next = 2;
                                return _model.query(function (qb) {

                                    if (typeof callback === 'function') {
                                        callback(qb);
                                    }
                                }).count();

                            case 2:
                                data = _context8.sent;
                                return _context8.abrupt('return', this.handle(data));

                            case 4:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function getQueryCount(_x10) {
                return _ref8.apply(this, arguments);
            }

            return getQueryCount;
        }()
    };
}
exports.default = _default;