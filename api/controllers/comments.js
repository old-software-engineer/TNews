const commentService = require("../services/commentService");

const create = async (req, res, next) => {
  try {
    const comment = await commentService.create(req.body);
    res.json(comment);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const {id, comment} = req.body;
    const result = await commentService.update(id, comment);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, update };