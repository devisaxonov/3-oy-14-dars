import mongoose, { Schema } from "mongoose";

const MovieCategoriesSchema = new Schema(
  {
    movie_id: { type: Schema.Types.ObjectId, required: true, ref: "Movie" },
    category_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  { versionKey: false, timestamps: true }
);

export const MovieCategoriesModel = mongoose.model(
  "MovieCategories",
  MovieCategoriesSchema
);
