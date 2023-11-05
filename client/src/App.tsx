import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="App">
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
