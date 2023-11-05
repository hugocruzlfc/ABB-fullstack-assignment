import { Router } from "express";
import { getPart } from "../controllers";
import { setSSEHeaders } from "../middlewares";

const router = Router();

router.get("/part", setSSEHeaders, getPart);

export default router;
