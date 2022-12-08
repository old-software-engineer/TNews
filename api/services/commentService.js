const knex = require("../db");

module.exports = commentService = {
  create: async (comment) => {
    const comments = await knex("comments").insert(comment);
    return comments;
  },
  update: async (id, comment) => {
    const comments = await knex("comments").where("id", id).update({
      comment: comment
    });
    return comments;
  },
};
