import { UserModel } from "../models/users.model.js";
import CustomError from "../utils/custom.error.js";
import ValidationService from "./validation.service.js";
import bcrypt from "bcrypt";

class UserService {
  constructor() {
    this.userModel = UserModel;
    this.validateService = new ValidationService();
  }
  async createUser(data) {
    await this.validateService.createUserValidation(data);
    const findUser = await this.userModel.findOne({ username: data.username });
    if (findUser) throw new CustomError("User already exists", 401);
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user = await this.userModel.create({
      ...data,
      password: hashedPassword,
    });

    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
  }
  async getAllUsers() {
    const data = await this.userModel.find().select("-password");
    return data;
  }
  async getOneUser(id) {
    const data = await this.userModel.findById(id).select({ password: 0 });
    return data;
  }
  async updateUser(data, id) {
    await this.validateService.updateUserValidation(data);
    const findUser = await this.userModel.findById(id);
    if (!findUser) throw new CustomError("User not found", 404);
    const newUser = await this.userModel
      .findOneAndUpdate({ _id: id }, { $set: data }, { new: true })
      .select({ password: 0 });
    return newUser;
  }
  async deleteUser(id) {
    if (!id) throw new CustomError("Id not found", 403);
    const findUser = await this.userModel.findById(id);
    console.log(findUser);
    if (!findUser)
      throw new CustomError("ID Invalid", 404);
    await this.userModel.deleteOne({ _id: id });
  }
}

export default UserService;
