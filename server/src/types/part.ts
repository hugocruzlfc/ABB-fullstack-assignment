import { PartName } from "./PartName";
import { Control } from "./control";

export interface Part {
  name: PartName;
  controls: Control[];
}
