import React from "react";
import { Part } from "../types";
//import Control from "./Control";
import { Link } from "react-router-dom";

export interface PartProps {
  part: Part;
}

const Part: React.FC<PartProps> = ({ part }) => {
  return (
    <div>
      <h2 className="uppercase">Cart Part: {part.name}</h2>
      <Link to={`/parts/${part._id}`}>
        <button>View Controls</button>
      </Link>
      {/* {part.controls.map((control) => (
        <Control
          key={control._id}
          control={control}
        />
      ))} */}
    </div>
  );
};

export default Part;
