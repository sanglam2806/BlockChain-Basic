'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Ecommerce = require('./build/Ecommerce.json');

var _Ecommerce2 = _interopRequireDefault(_Ecommerce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Ecommerce2.default.interface), '0xdCeA35294f7f4cBd73d35Af9DC0FdeC61c0638be');
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVjb21tZXJjZS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiY29tbWVyY2UiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDYixLQUFLLEFBQUwsTUFBVyxvQkFBUyxBQUFwQixBQURhLFlBRWIsQUFGYSxBQUFqQixBQUlBO2tCQUFlLEFBQWYiLCJmaWxlIjoiZWNvbW1lcmNlLmpzIiwic291cmNlUm9vdCI6IkU6L05vZGVKcy9FdGhlcmV1bUNhc3RzLW1hc3Rlci9lY29tbWVyY2UtcHJvamVjdCJ9