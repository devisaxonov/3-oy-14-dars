import { Router } from "express";
import CategoryController from "../controllers/category.controller.js";

const categoryRouter = Router();
const controller = new CategoryController();

categoryRouter.post(
  "/addcategory",
  controller.createCategoryController.bind(controller)
);
categoryRouter.get(
  "/categories",
  controller.getAllCategoryController.bind(controller)
);
categoryRouter.get(
  "/category/:id",
  controller.getOneCategoryController.bind(controller)
);
categoryRouter.put(
  "/updatecategory/:id",
  controller.updateCategoryController.bind(controller)
);
categoryRouter.delete(
  "/deletecategory/:id",
  controller.deleteCategoryController.bind(controller)
);

export default categoryRouter;
