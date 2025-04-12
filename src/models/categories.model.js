import mongoose, { Schema } from "mongoose";

const CategoriesSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const CategoriesModel = mongoose.model("Category", CategoriesSchema);
