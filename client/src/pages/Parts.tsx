import { Part } from "../components";
import { useAppStore } from "../store";

export interface PartsProps {}

const Parts: React.FC<PartsProps> = () => {
  const parts = useAppStore((state) => state.parts);

  return (
    <main>
      <div>
        <h1 className="flex justify-center uppercase">
          ABB Full Stack Assignment
        </h1>
      </div>
      <div className="mt-6">
        <h2 className="flex justify-center uppercase">Parts</h2>
        <p className="flex flex-row-reverse mr-6">Total: {parts.length}</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {parts.map((part) => (
          <Part
            part={part}
            key={part._id}
          />
        ))}
      </div>
    </main>
  );
};

export default Parts;
