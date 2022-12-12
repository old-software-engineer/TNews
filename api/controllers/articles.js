const articleService = require("../services/articleService");
const helper = require("../utils/common");

const getAll = async (req, res, next) => {
  try {
    const articles = await articleService.getAll();
    res.json(articles);
  } catch (error) {
    next(error);
  }
};

const getByUserId = async (req, res, next) => {
  try {
    const articles = await articleService.getByUserId(req.user.id);
    res.json(articles);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const article = await articleService.getById(req.params.id);
    res.json(article);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const body = req.body;
    const user_id = req.user.id;
    const article = await articleService.create({ ...body, user_id });
    res.json(article);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const checkUser = articleService.checkUserArticle(req.body.id, req.user.id);
  if (!checkUser) {
    return helper.handleResponse(res, 401, "You are not authorised");
  } else {
    try {
      const { id } = req.body;
      const article = await articleService.update(id, req.body);
      res.json(article);
    } catch (error) {
      next(error);
    }
  }
};

const deleteArticle = async (req, res, next) => {
  const checkUser = articleService.checkUserArticle(req.params.id, req.user.id);
  if (!checkUser) {
    return helper.handleResponse(res, 401, "You are not authorised");
  } else {
    try {
      const article = await articleService.delete(req.params.id);
      res.json(article);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = {
  getAll,
  getByUserId,
  getById,
  create,
  update,
  deleteArticle,
};
