import { Router } from "express";
import { param } from "express-validator";
import { getMovies, getMovie } from "../controllers/movie.js";
import { expressValidator } from "../middleware/expressValidator.js";

const router = Router();

router.get("/", getMovies);
router.get(
  "/:id",
  param("id").trim().not().isEmpty(),
  expressValidator,
  getMovie
);

export default router;
