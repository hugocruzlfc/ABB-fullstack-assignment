import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { useEventSource } from "./hooks";

function App() {
  useEventSource();
  return (
    <div className="m-4">
      <Routes>
        {publicRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
