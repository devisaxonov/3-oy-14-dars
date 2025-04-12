import { Router } from "express";
import CategoryController from "../controllers/category.controller.js";

const categoryRouter = Router();
const controller = new CategoryController()

categoryRouter.post("/category", controller.createCategory.bind(controller));
categoryRouter.get("/categories",controller.getAllCategory.bind(controller));
categoryRouter.get("/category/:id", controller.getOneCategory.bind(controller));
categoryRouter.put("/category/:id", controller.updateCategory.bind(controller));
categoryRouter.delete("/category/:id", controller.deleteCategory.bind(controller));

export default categoryRouter;
