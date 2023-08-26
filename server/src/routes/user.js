import { Router } from "express";
import { param } from "express-validator";
import { User } from "../db";
import {
  createToken,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "../controllers/user.js";
import { expressValidator } from "../middleware/expressValidator.js";

const router = Router();

router.get("/token", createToken);
router.get(
  "/:userId/watchlist",
  param("userId").trim().not().isEmpty(),
  param("userId").custom(async (userId) => await User.exists(userId)),
  expressValidator,
  getWatchlist
);
router.post(
  "/:userId/watchlist",
  param("userId").trim().not().isEmpty(),
  param("userId").custom(async (userId) => await User.exists(userId)),
  expressValidator,
  addToWatchlist
);
router.delete(
  "/:userId/watchlist/:movieId",
  param("userId").trim().not().isEmpty(),
  param("userId").custom(async (userId) => await User.exists(userId)),
  param("movieId").trim().not().isEmpty(),
  expressValidator,
  removeFromWatchlist
);

export default router;
