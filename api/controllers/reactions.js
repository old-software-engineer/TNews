const reactionService = require("../services/reactionService");

const create = async (req, res, next) => {
  try {
    const { article_id, user_id, reaction } = req.body;
    //  Check if any reaction with same user_id and article exists
    const existingReaction = await reactionService.getByArticleUser(
      article_id,
      user_id
    );
    if (existingReaction) {
      const result = await reactionService.update(
        existingReaction.id,
        reaction
      );
      res.json(result);
    } else {
      const reaction = await reactionService.create(req.body);
      res.json(reaction);
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id, reaction } = req.body;
    const result = await reactionService.update(id, reaction);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, update };
