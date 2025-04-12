import UserService from "../services/user.service.js";

class UserController {
  constructor() {
    this.userService = new UserService();
  }
  async createUser(req, res, next) {
    try {
      const body = req.body;
      const data = await this.userService.createUser(body);
      res.status(201).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async getAllUsers(req, res, next) {
    try {
      const data = await this.userService.getAllUsers();
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async getOneUsers(req, res, next) {
    try {
      const data = await this.userService.getOneUser(req.params.id);
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async updateUser(req, res, next) {
    try {
      const body = req.body;
      const data = await this.userService.updateUser(body, req.params.id);
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async deleteUser(req, res, next) {
    try {
      await this.userService.deleteUser(req.params.id);
      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
