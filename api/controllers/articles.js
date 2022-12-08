const jwt = require("jsonwebtoken");
const articleService = require("../services/articleService");

const getAll = async (req, res, next) => {
  try {
    const articles = await articleService.getAll();
    res.json(articles);
  } catch (error) {
    next(error);
  }
};

const getByUserId = async (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");
  try {
    if (token.startsWith("Bearer ")) {
      // Remove Bearer from string
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, "random string");
    if (verified) {
      const articles = await articleService.getByUserId(verified.id);
      res.json(articles);
    }
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");
  try {
    if (token.startsWith("Bearer ")) {
      // Remove Bearer from string
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, "random string");
    if (verified) {
      const article = await articleService.getById(req.params.id, verified.id);
      res.json(article);
    }
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const article = await articleService.create(req.body);
    res.json(article);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getByUserId, getById, create };
