import { PartName } from "./PartName";
import { Control } from "./control";

export interface Part {
  _id: string;
  name: PartName;
  controls: Control[];
}
