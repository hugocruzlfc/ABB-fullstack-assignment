import { useEffect } from "react";
import { useAppStore } from "../store";

export const useEventSource = () => {
  const addPart = useAppStore((state) => state.addPart);

  useEffect(() => {
    const eventSource = new EventSource(import.meta.env.VITE_API_EVENTS);

    eventSource.onmessage = (event) => {
      const data = event.data;
      const formattedData = JSON.parse(data);
      addPart(formattedData);
    };

    eventSource.onerror = (error) => {
      console.error("Error de conexión SSE:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [addPart]);
};
