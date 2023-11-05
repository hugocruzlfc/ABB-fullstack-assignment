import { Feature } from "./feature";
import { MeasuredParameter } from "./measuredParameter";

export interface Control {
  feature: Feature;
  measuredParameter: MeasuredParameter;
  expectedIdealSize: number;
  realSize: number;
  tolerance: number;
  dev: number;
  devOutTolerance: number;
}
