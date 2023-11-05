import { Request, Response } from "express";
import { cerateRandomPart } from "../libs";

export const getPart = async (req: Request, res: Response) => {
  try {
    const part = cerateRandomPart();
    return res.status(200).json(part);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
