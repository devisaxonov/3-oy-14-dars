import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = Router();
const controller = new UserController();

userRouter.post("/user", controller.createUser.bind(controller));
userRouter.get("/users", controller.getAllUsers.bind(controller));
userRouter.get("/user/:id", controller.getOneUsers.bind(controller));
userRouter.put("/user/:id", controller.updateUser.bind(controller));
userRouter.delete("/user/:id", controller.deleteUser.bind(controller));

export default userRouter;
