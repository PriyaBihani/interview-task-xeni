import { v4 as uuidv4 } from "uuid";
import { User } from "../db";

export const createToken = async (req, res) => {
  try {
    const userId = uuidv4();
    const user = new User({ userId });
    await user.save();
    res.status(200).json({
      message: "Token created",
      success: true,
      data: userId,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// bb273f11-9e74-40e0-93fe-0d95034b8f93
