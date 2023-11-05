import React from "react";
import { Control } from "../types";

export interface ControlProps {
  control: Control;
}

const Control: React.FC<ControlProps> = ({ control }) => {
  return (
    <div>
      <h2 className="capitalize">Feature: {control.feature}</h2>
      <p className="capitalize">Measure: {control.measuredParameter}</p>
      <p>Expected Ideal Size: {control.expectedIdealSize} mm</p>
      <p>Real Size: {control.realSize} mm</p>
      <p>Tolerance: {control.tolerance} mm</p>
      <p>Dev: {control.dev} mm</p>
      <p>Dev Out Tolerance: {control.devOutTolerance} mm</p>
    </div>
  );
};

export default Control;
