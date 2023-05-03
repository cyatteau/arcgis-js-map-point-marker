import Graphic from "@arcgis/core/Graphic";

export function pointMarker(long, lat, color, outColor, outWidth) {
  return new Graphic({
    geometry: {
      type: "point",
      longitude: long,
      latitude: lat,
    },
    symbol: {
      type: "simple-marker",
      color: color,
      outline: {
        color: outColor,
        width: outWidth,
      },
    },
  });
}
