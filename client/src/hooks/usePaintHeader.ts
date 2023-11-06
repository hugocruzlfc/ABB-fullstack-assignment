import { Control, HeaderIcon } from "../types";

export interface PaintHeaderProps {
  control: Control;
}

const HEADER_COLORS = {
  green: "#4CAF50",
  yellow: "#FFEB3B",
  red: "#F44336",
};

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
    ? HEADER_COLORS.yellow
    : overRange
    ? HEADER_COLORS.red
    : HEADER_COLORS.green;

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
