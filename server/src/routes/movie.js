import { Router } from 'express';
import { getMovies, getMovie } from '../controllers/movie.js';

const router = Router();

router.get('/', getMovies);
router.get('/:id', getMovie);

export default router;