import React from "react";
import { Part } from "../types";
//import Control from "./Control";
import { Link } from "react-router-dom";

export interface PartProps {
  part: Part;
}

const Part: React.FC<PartProps> = ({ part }) => {
  return (
    <div className="flex items-center space-x-5 bg-zinc-300 hover:bg-zinc-500 font-bold py-2 px-4 rounded-full">
      <h2>
        Cart Part: <span className="uppercase">{part.name}</span>
      </h2>
      <Link
        className="text-blue-500 hover:text-blue-800 text-xs"
        to={`/parts/${part._id}`}
      >
        <button>View Controls</button>
      </Link>
    </div>
  );
};

export default Part;
