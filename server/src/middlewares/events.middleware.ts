import { Request, Response, NextFunction } from "express";

export const setSSEHeaders = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
  next();
};
