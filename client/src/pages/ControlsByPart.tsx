import React, { useCallback, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppStore } from "../store";
import { Control } from "../components";
import { HEADER_COLORS } from "../types";
import { getBadMeasureColor } from "../utils";

export interface ControlsByPartProps {}

const ControlsByPart: React.FC<ControlsByPartProps> = () => {
  const { id } = useParams();
  const parts = useAppStore((state) => state.parts);
  const navigate = useNavigate();
  const [colorsByControl, setColorsByControl] = useState<HEADER_COLORS[]>([]);

  const currentPart = parts.find((part) => part._id === id);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleSetColorsByControl = useCallback((color: HEADER_COLORS) => {
    setColorsByControl((prev) => [...prev, color]);
  }, []);

  const bgColorPartName = useMemo(
    () => getBadMeasureColor(colorsByControl),
    [colorsByControl]
  );

  return (
    <>
      <div
        className="flex justify-center space-x-4"
        style={{
          backgroundColor: bgColorPartName,
        }}
      >
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
          addColor={handleSetColorsByControl}
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
