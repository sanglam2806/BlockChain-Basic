'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _ecommerce = require('../ecommerce');

var _ecommerce2 = _interopRequireDefault(_ecommerce);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\NodeJs\\EthereumCasts-master\\ecommerce-project\\pages\\index.js?entry';
//import React from 'react';


var CommerceIndex = function (_Component) {
    (0, _inherits3.default)(CommerceIndex, _Component);

    function CommerceIndex() {
        (0, _classCallCheck3.default)(this, CommerceIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CommerceIndex.__proto__ || (0, _getPrototypeOf2.default)(CommerceIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CommerceIndex, [{
        key: 'render',
        value: function render() {
            _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, 'Hello guys');
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;
                                return _context.abrupt('return', { accounts: accounts });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CommerceIndex;
}(_react.Component);

exports.default = CommerceIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb21tZXJjZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNvbW1lcmNlSW5kZXgiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVTs7Ozs7OztBQUhqQjs7O0ksQUFNTTs7Ozs7Ozs7Ozs7aUNBTU0sQUFDSjs0QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBQSxBQUNIOzs7Ozs7Ozs7Ozs7dUNBTjBCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7aUNBQTFCO0E7aUVBQ0MsRUFBQyxVQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIYSxBLEFBVzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L05vZGVKcy9FdGhlcmV1bUNhc3RzLW1hc3Rlci9lY29tbWVyY2UtcHJvamVjdCJ9