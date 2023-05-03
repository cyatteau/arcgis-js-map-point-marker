"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointMarker = pointMarker;
var _Graphic = _interopRequireDefault(require("@arcgis/core/Graphic"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function pointMarker(_long, lat, color, outColor, outWidth) {
  return new _Graphic["default"]({
    geometry: {
      type: "point",
      longitude: _long,
      latitude: lat
    },
    symbol: {
      type: "simple-marker",
      color: color,
      outline: {
        color: outColor,
        width: outWidth
      }
    }
  });
}