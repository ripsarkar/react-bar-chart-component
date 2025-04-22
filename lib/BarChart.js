"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _DynamicBarChart = _interopRequireDefault(require("./components/DynamicBarChart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var BarChart = function BarChart() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Dynamic Bar Chart Example"), /*#__PURE__*/_react["default"].createElement(_DynamicBarChart["default"], null));
};
var _default = exports["default"] = BarChart;