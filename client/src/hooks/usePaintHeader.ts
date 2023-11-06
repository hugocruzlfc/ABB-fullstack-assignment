import { Control, HEADER_COLORS, HeaderIcon } from "../types";

export interface PaintHeaderProps {
  control: Control;
  addColor: (color: HEADER_COLORS) => void;
}

export const usePaintHeader = (control: Control) => {
  const expectedIdealSize = control.expectedIdealSize;
  const realSize = control.realSize;
  const tolerance = control.tolerance;

  const rangePercent = expectedIdealSize * 0.3;
  const min = expectedIdealSize - rangePercent - tolerance;
  const max = expectedIdealSize + rangePercent + tolerance;

  const allowedRange = realSize >= min && realSize <= max; // yellow
  const overRange = realSize < min || realSize > max; // red

  const color = allowedRange
    ? HEADER_COLORS.YELLOW
    : overRange
    ? HEADER_COLORS.RED
    : HEADER_COLORS.GREEN;

  const icon = allowedRange
    ? HeaderIcon.WARNING
    : overRange
    ? HeaderIcon.ERROR
    : HeaderIcon.SUCCESS;

  return {
    color,
    icon,
  };
};
