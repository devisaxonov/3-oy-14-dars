import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_admin: { type: Boolean, default: "false" },
  },
  { versionKey: false, timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
