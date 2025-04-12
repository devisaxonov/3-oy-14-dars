import { Router } from "express";
import RewievController from "../controllers/rewievs.controller.js";

const rewievsRouter = Router();
const controller = new RewievController();

rewievsRouter.post(
  "/addrewiev",
  controller.createRewievController.bind(controller)
);
rewievsRouter.get(
  "getrewievs",
  controller.getAllRewievController.bind(controller)
);

export default rewievsRouter;
