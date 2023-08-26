import { Router } from "express";
import { body, param } from "express-validator";
import { User } from "../db";
import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "../controllers/watchlist.js";
import { expressValidator } from "../middleware/expressValidator.js";
const router = Router();

router.get(
  "/:userId",
  param("userId").trim().not().isEmpty(),
  param("userId").custom(async (userId) => await User.exists(userId)),
  expressValidator,
  getWatchlist
);
router.post(
  "/:userId",
  param("userId").trim().not().isEmpty(),
  param("userId").custom(async (userId) => await User.exists(userId)),
  body("movieId").trim().not().isEmpty(),
  body("title").trim().not().isEmpty(),
  body("releaseYear").trim().not().isEmpty(),
  body("posterUrl").trim().not().isEmpty(),
  expressValidator,
  addToWatchlist
);
router.delete(
  "/:movieId/:userId",
  param("movieId").trim().not().isEmpty(),
  param("userId").trim().not().isEmpty(),
  param("userId").custom(async (userId) => await User.exists(userId)),
  expressValidator,
  removeFromWatchlist
);

export default router;
