import { CategoriesModel } from "../models/categories.model.js";
import CustomError from "../utils/custom.error.js";
import ValidationService from "./validation.service.js";

class CategoryService {
  constructor() {
    this.categoryModel = CategoriesModel;
    this.validationService = new ValidationService();
  }
  async createCategory(data) {
    await this.validationService.createCategoryValidation(data);
    const findCategory = await this.categoryModel.find({ name: data.name });
    console.log(findCategory);
    if (findCategory[0]) throw new CustomError("Category already existed", 409);
    const ans = await this.categoryModel.create(data);
    return ans;
  }
  async getAllCategory() {
    const data = await this.categoryModel.find();
    return data;
  }
  async getOneCategory(id) {
    console.log(id);
    const data = await this.categoryModel.findById(id);
    return data;
  }
  async updateCategory(data, id) {
    await this.validationService.updateCategoryValidation(data);
    const findcategory = await this.categoryModel.findById(id);
    if (!findcategory)
      throw new CustomError("Bunday id da categoriya mavjud emas", 404);
    const ans = await this.categoryModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return ans;
  }
  async deleteCategory(id) {
    const findCategory = await this.categoryModel.findById(id);
    if (!findCategory) throw new CustomError("Category not found", 404);
    await this.categoryModel.deleteOne({ _id: id });
  }
}

export default CategoryService;
