import express, { Request, Response, Application } from "express";
import cors from "cors";
import morgan from "morgan";

import { FRONTEND_URL } from "./config.ts";
import { partRoutes } from "./routes";

const app: Application = express();

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.use("/api", partRoutes);

export default app;
