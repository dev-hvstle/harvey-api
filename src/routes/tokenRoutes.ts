import express from "express";
import { GETTokenInfo } from "../controller/tokenController";

const router = express.Router();

router.get("/info", GETTokenInfo);

export default router;
