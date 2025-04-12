import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = Router();
const controller = new UserController();

userRouter.post(
  "/createuser",
  controller.createUserController.bind(controller)
);
userRouter.get(
  "/getallusers",
  controller.getAllUsersController.bind(controller)
);
userRouter.get(
  "/getuser/:id",
  controller.getOneUsersController.bind(controller)
);
userRouter.put(
  "/updateuser/:id",
  controller.updateUserController.bind(controller)
);
userRouter.delete(
  "/deleteuser/:id",
  controller.deleteUserController.bind(controller)
);

export default userRouter;
