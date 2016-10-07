'use strict';

var _koahubjs = require('koahubjs');

var _koahubjs2 = _interopRequireDefault(_koahubjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koahubjs2.default();
app.run(3000);

console.log(koahub.hook.add('hook1', '/admin/order/index'));
console.log(koahub.hook.add('hook1', '/admin/order/index2'));

console.log(koahub.hook.add('hook2', 'tools.add(1,2)'));
console.log(koahub.hook.add('hook2', 'tools.dis(2,1)'));