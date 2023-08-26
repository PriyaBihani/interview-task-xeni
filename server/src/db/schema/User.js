import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    movies: {
      type: [
        {
          id: {
            type: Number,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          releaseDate: {
            type: String,
            required: true,
          },
          posterUrl: {
            type: String,
            required: true,
          },
          watched: {
            type: Boolean,
            default: false,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

UserSchema.statics.exists = async function (userId) {
  try {
    const user = await this.findOne({ userId: userId });
    if (!user) throw new Error("User does not exists");
    return user;
  } catch (error) {
    throw error;
  }
};

export const User = mongoose.model("user", UserSchema);
