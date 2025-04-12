import mongoose, { Schema } from "mongoose";

const MovieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    release_year: { type: Number, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    poster_image: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const MovieModel = mongoose.model("Movie", MovieSchema);
