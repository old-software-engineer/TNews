const knex = require("../db");

module.exports = reactionService = {
  getByArticleUser: async (article_id, user_id) => {
    const reaction = await knex("reactions")
      .where({
        article_id,
        user_id,
      })
      .first();
    return reaction;
  },
  create: async (reaction) => {
    const reactions = await knex("reactions").insert(reaction).returning("*");
    return reactions;
  },
  getCountArticleReactions: async (article_id) => {
    const reaction = await knex("reactions")
      .where({
        article_id,
        reaction: "like",
      })
      .count("article_id as likes_count")
      .first();
    return reaction;
  },
  update: async (id, reaction) => {
    const reactions = await knex("reactions")
      .where("id", id)
      .update({
        reaction: reaction,
      })
      .returning("*");
    return reactions;
  },
};
