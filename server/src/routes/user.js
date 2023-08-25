import { Router } from "express";
import { param } from "express-validator";
import { createToken } from "../controllers/user.js";
import { expressValidator } from "../middleware/expressValidator.js";

const router = Router();

router.get("/token", createToken);

export default router;
