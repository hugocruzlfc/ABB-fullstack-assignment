import { Router } from "express";
import { getPart } from "../controllers";

const router = Router();

router.get("/part", getPart);

export default router;
