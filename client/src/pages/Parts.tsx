import { useEffect, useState } from "react";
import { Part as PartType } from "../types";
import { Part } from "../components";

export interface PartsProps {}

const Parts: React.FC<PartsProps> = () => {
  const [sseData, setSSEData] = useState<PartType[]>([]);

  useEffect(() => {
    const eventSource = new EventSource(import.meta.env.VITE_API_EVENTS);

    eventSource.onmessage = (event) => {
      const data = event.data;
      //jasonParse;
      const formattedData = JSON.parse(data);
      setSSEData((prev) => [...prev, formattedData]);
    };

    eventSource.onerror = (error) => {
      console.error("Error de conexión SSE:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>ABB Full Stack Assignment</h1>
      {sseData.map((part) => (
        <Part
          key={part._id}
          part={part}
        />
      ))}
    </div>
  );
};

export default Parts;
