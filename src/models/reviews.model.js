import mongoose, { Schema } from "mongoose";

const ReviewsSchema = new Schema(
  {
    movie_id: { type: Schema.Types.ObjectId, required: true, ref: "Movies" },
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
    rating: { type: Number, min: 1, max: 10, required: true },
    comment: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export const ReviewsModel = mongoose.model("Reviews", ReviewsSchema);
