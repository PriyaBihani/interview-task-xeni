import { v4 as uuidv4 } from "uuid";

export const createToken = (req, res) => {
  res.status(200).json({
    message: "Token created",
    success: true,
    data: uuidv4(),
  });
};
