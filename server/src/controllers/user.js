import { v4 as uuidv4 } from "uuid";

export const createToken = (req, res) => {
  res.status(200).json({
    message: "Token created",
    success: true,
    data: uuidv4(),
  });
};

export const getWatchlist = (req, res) => {
  console.log("getWatchlist");
};

export const addToWatchlist = (req, res) => {
  console.log("addToWatchlist");
};

export const removeFromWatchlist = (req, res) => {
  console.log("removeFromWatchlist");
};
