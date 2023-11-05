import React from "react";
import { Part } from "../types";
import Control from "./Control";

export interface PartProps {
  part: Part;
}

const Part: React.FC<PartProps> = ({ part }) => {
  return (
    <div>
      <h2 className="uppercase">Cart Part: {part.name}</h2>
      {part.controls.map((control) => (
        <Control
          key={control._id}
          control={control}
        />
      ))}
    </div>
  );
};

export default Part;
