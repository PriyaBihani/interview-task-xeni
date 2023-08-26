import { User } from "../db";

export const getWatchlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ userId });
    res.status(200).json({
      message: "Watchlist fetched",
      success: true,
      data: user.movies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const addToWatchlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const { movieId, title, releaseDate, posterUrl } = req.body;
    const movie = {
      id: movieId,
      title,
      releaseDate,
      posterUrl,
    };

    const user = await User.findOne({ userId });
    const movieExists = user.movies.some((m) => m.id === Number(movieId));
    if (movieExists) {
      return res.status(400).json({
        message: "Movie already in watchlist",
        success: false,
        watchlist: user.movies,
      });
    }

    const watchlist = await User.findOneAndUpdate(
      { userId },
      { $addToSet: { movies: movie } },
      { new: true }
    );

    res.status(201).json({
      message: "Movie added to watchlist",
      success: true,
      data: watchlist.movies || [],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const removeFromWatchlist = async (req, res) => {
  try {
    const { userId, movieId } = req.params;
    const watchlist = await User.findOneAndUpdate(
      { userId },
      { $pull: { movies: { id: movieId } } },
      { new: true }
    );

    res.status(200).json({
      message: "Movie removed from watchlist",
      success: true,
      data: watchlist,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
