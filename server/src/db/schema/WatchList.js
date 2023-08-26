import mongoose from "mongoose";

const WatchListSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    movies: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        releaseYear: {
          type: String,
          required: true,
        },
        posterUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const WatchList = mongoose.model("watchlist", WatchListSchema);

export default WatchList;
