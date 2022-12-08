const knex = require("../db");
const categoryService = require("../services/categoryService");

const getAll = async (req, res, next) => {
  try {
    const categories = await categoryService.getAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const category = await categoryService.getById(req.params.id);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const category = await categoryService.create(req.body);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create };
