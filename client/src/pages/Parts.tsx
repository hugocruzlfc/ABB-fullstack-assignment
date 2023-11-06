import { Part } from "../components";
import { useAppStore } from "../store";

export interface PartsProps {}

const Parts: React.FC<PartsProps> = () => {
  const parts = useAppStore((state) => state.parts);

  return (
    <div>
      <h1 className="flex justify-center uppercase">
        ABB Full Stack Assignment
      </h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {parts.map((part) => (
          <Part
            part={part}
            key={part._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Parts;
