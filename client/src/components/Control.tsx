import React from "react";
import { Control } from "../types";

export interface ControlProps {
  control: Control;
}

const Control: React.FC<ControlProps> = ({ control }) => {
  return (
    <div className="bg-zinc-300 font-bold py-2 px-4 rounded my-4">
      <h2 className="capitalize justify-center flex">
        Feature: {control.feature}
      </h2>
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
