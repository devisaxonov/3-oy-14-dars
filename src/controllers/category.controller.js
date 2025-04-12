import CategoryService from "../services/category.service.js";

class CategoryController {
  constructor() {
    this.categoryService = new CategoryService();
  }
  async createCategory(req, res, next) {
    try {
      const body = req.body;
      const data = await this.categoryService.createCategory(body);
      res.status(201).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async getAllCategory(req, res, next) {
    try {
      const data = await this.categoryService.getAllCategory();
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async getOneCategory(req, res, next) {
    try {
      const data = await this.categoryService.getOneCategory(req.params.id);
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async updateCategory(req, res, next) {
    try {
      const body = req.body;
      const data = await this.categoryService.updateCategory(
        body,
        req.params.id
      );
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async deleteCategory(req, res, next) {
    try {
      await this.categoryService.deleteCategory(req.params.id);
      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController;
