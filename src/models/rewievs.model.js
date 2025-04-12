import mongoose, { Schema } from "mongoose";

const RewievsSchema = new Schema(
  {
    movie_id: { type: Schema.Types.ObjectId, required: true, ref: "Movies" },
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
    rating: { type: Number, min: 1, max: 10, required: true },
    comment: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export const RewievsModel = mongoose.model("Rewievs", RewievsSchema);
