import { Router } from "express";

import { createToken } from "../controllers/user.js";

const router = Router();

router.post("/token", createToken);

export default router;
