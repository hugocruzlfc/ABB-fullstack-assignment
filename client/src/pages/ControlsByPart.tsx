import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppStore } from "../store";
import { Control } from "../components";

export interface ControlsByPartProps {}

const ControlsByPart: React.FC<ControlsByPartProps> = () => {
  const { id } = useParams();
  const parts = useAppStore((state) => state.parts);
  const navigate = useNavigate();

  const currentPart = parts.find((part) => part._id === id);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center space-x-4">
        <div>
          Controls By Part:
          <span className="uppercase"> {currentPart?.name}</span>
        </div>
        <div>
          Total Controls: <span>{currentPart?.controls.length}</span>
        </div>
      </div>
      {currentPart?.controls.map((control) => (
        <Control
          key={control._id}
          control={control}
        />
      ))}
      <div className="flex justify-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded inline-flex items-center btn-sm"
          onClick={handleNavigate}
        >
          Go to Dashboard
        </button>
      </div>
    </>
  );
};

export default ControlsByPart;
