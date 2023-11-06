import React, { useEffect } from "react";
import { Control, HEADER_COLORS } from "../types";
import { usePaintHeader } from "../hooks";
import HeaderIcon from "./HeaderIcon";

export interface ControlProps {
  control: Control;
  addColor: (color: HEADER_COLORS) => void;
  // addColor: Dispatch<React.SetStateAction<HEADER_COLORS[]>>;
}

const Control: React.FC<ControlProps> = ({ control, addColor }) => {
  const { color, icon } = usePaintHeader(control);

  useEffect(() => {
    addColor(color);
  }, [color, addColor]);

  return (
    <div className="bg-zinc-300 font-bold py-2 px-4 rounded my-4">
      <div
        className=" flex justify-center text-white bold space-x-8 items-center "
        style={{
          backgroundColor: color,
        }}
      >
        <h2 className="capitalize">Feature: {control.feature}</h2>
        <span>{<HeaderIcon iconType={icon} />}</span>
      </div>
      <p className="capitalize">Measure: {control.measuredParameter}</p>
      <div className="flex flex-wrap space-x-4">
        <p>Expected Ideal Size: {control.expectedIdealSize} mm</p>
        <p>Real Size: {control.realSize} mm</p>
      </div>

      <p>Tolerance: {control.tolerance} mm</p>
      <div className="flex flex-wrap space-x-4">
        <p>Dev: {control.dev} mm</p>
        <p>Dev Out Tolerance: {control.devOutTolerance} mm</p>
      </div>
    </div>
  );
};

export default Control;
