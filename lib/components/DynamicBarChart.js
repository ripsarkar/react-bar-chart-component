"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DynamicBarChart = function DynamicBarChart() {
  var _useState = (0, _react.useState)([50, 100, 30, 80, 120]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var addData = function addData() {
    var newValue = Math.floor(Math.random() * 150);
    setData([].concat(_toConsumableArray(data), [newValue]));
  };
  var maxValue = Math.max.apply(Math, _toConsumableArray(data));
  var barWidth = 50;
  var barSpacing = 20;
  var chartHeight = 150;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("svg", {
    width: 400,
    height: 200
  }, /*#__PURE__*/_react["default"].createElement("line", {
    x1: 50,
    y1: chartHeight + 30,
    x2: 350,
    y2: chartHeight + 30,
    stroke: "black"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: 50,
    y1: 30,
    x2: 50,
    y2: chartHeight + 30,
    stroke: "black"
  }), data.map(function (_, index) {
    var x = 50 + index * (barWidth + barSpacing);
    return /*#__PURE__*/_react["default"].createElement("g", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("line", {
      x1: x + barWidth / 2,
      y1: chartHeight + 28,
      x2: x + barWidth / 2,
      y2: chartHeight + 30,
      stroke: "black"
    }), /*#__PURE__*/_react["default"].createElement("text", {
      x: x + barWidth / 2 - 10,
      y: chartHeight + 50,
      fontSize: "12"
    }, "Data ".concat(index + 1)));
  }), [0, 30, 60, 90, 120].map(function (value, index) {
    var y = chartHeight + 30 - value / maxValue * chartHeight;
    return /*#__PURE__*/_react["default"].createElement("g", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("line", {
      x1: 45,
      y1: y,
      x2: 50,
      y2: y,
      stroke: "black"
    }), /*#__PURE__*/_react["default"].createElement("text", {
      x: 15,
      y: y + 5,
      fontSize: "12"
    }, value));
  }), data.map(function (value, index) {
    var barHeight = value / maxValue * chartHeight;
    var x = 50 + index * (barWidth + barSpacing);
    var y = chartHeight + 30 - barHeight;
    return /*#__PURE__*/_react["default"].createElement("rect", {
      key: index,
      x: x,
      y: y,
      width: barWidth,
      height: barHeight,
      fill: "teal"
    });
  })));
};
var _default = exports["default"] = DynamicBarChart;