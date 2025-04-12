import joi from "joi";
import CustomError from "../utils/custom.error.js";

class ValidationService {
  async movieValidation(data) {
    try {
      const schema = joi.object({
        title: joi.string().min(2).max(50).required(),
        release_year: joi.number().required(),
        description: joi.string().required(),
        duration: joi.number().required(),
      });
      await schema.validateAsync(data);
    } catch (error) {
      throw new CustomError(error.message, 403);
    }
  }
  async movieUpdateValidation(data) {
    try {
      const schema = joi.object({
        title: joi.string().min(2).max(50).optional(),
        release_year: joi.number().optional(),
        description: joi.string().optional(),
        duration: joi.number().optional(),
      });
      await schema.validateAsync(data);
    } catch (error) {
      throw new CustomError(error.message, 403);
    }
  }
  async createUserValidation(data) {
    try {
      const schema = joi.object({
        username: joi.string().min(2).max(50).required(),
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
      });
      await schema.validateAsync(data);
    } catch (error) {
      throw new CustomError(error.message, 403);
    }
  }
  async updateUserValidation(data) {
    try {
      const schema = joi.object({
        username: joi.string().min(2).max(50).optional(),
        email: joi.string().email().optional(),
      });
      await schema.validateAsync(data);
    } catch (error) {
      throw new CustomError(error.message, 403);
    }
  }
  async createCategoryValidation(data) {
    try {
      const schema = joi.object({
        name: joi.string().min(2).required(),
        description: joi.string().min(3).required(),
      });
      await schema.validateAsync(data);
    } catch (error) {
      throw new CustomError(error.message, 403);
    }
  }
  async updateCategoryValidation(data) {
    try {
      const schema = joi.object({
        name: joi.string().min(2).optional(),
        description: joi.string().min(3).optional(),
      });
      await schema.validateAsync(data);
    } catch (error) {
      throw new CustomError(error.message, 403);
    }
  }
}

export default ValidationService;
