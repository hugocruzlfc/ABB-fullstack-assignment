import { Request, Response } from "express";
import { cerateRandomPart } from "../libs";

export const getPart = async (req: Request, res: Response) => {
  try {
    // return res.status(200).json(part);

    setInterval(() => {
      const part = cerateRandomPart();
      res.write(`data: ${JSON.stringify(part)}\n\n`);
    }, 10000);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
