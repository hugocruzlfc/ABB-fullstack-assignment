import { HEADER_COLORS } from "../types";

export function getBadMeasureColor(colorArray: HEADER_COLORS[]) {
  const wrongMeasure = colorArray.filter(
    (color) => color === HEADER_COLORS.RED
  );

  if (wrongMeasure.length > 0) {
    return HEADER_COLORS.RED;
  } else {
    const warningMeasure = colorArray.filter(
      (color) => color === HEADER_COLORS.YELLOW
    );
    if (warningMeasure.length > 0) {
      return HEADER_COLORS.YELLOW;
    } else {
      return HEADER_COLORS.GREEN;
    }
  }
}
