const knex = require("../db");

module.exports = articleService = {
  getAll: async () => {
    const articles = await knex("articles")
      .join("users", "users.id", "articles.user_id")
      .join("categories", "categories.id", "articles.category_id")
      .select(
        "articles.*",
        "users.name as user_name",
        "users.email",
        "categories.name as category_name"
      )
      .where({ public_access: true });
    return articles;
  },
  getByUserId: async (id) => {
    const articles = await knex("articles")
      .join("users", "users.id", "articles.user_id")
      .join("categories", "categories.id", "articles.category_id")
      .select(
        "articles.*",
        "users.name as user_name",
        "users.email",
        "categories.name as category_name"
      )
      .where("users.id", id);
    return articles;
  },
  getById: async (article_id, user_id) => {
    const article = await knex("articles")
      .where("articles.id", article_id)
      .join("reactions", "reactions.article_id", "articles.id")
      .where("reactions.user_id", user_id)
      .select("articles.*", "reactions.reaction", "reactions.id as reaction_id");
    return article;
  },
  create: async (article) => {
    const articles = await knex("articles").insert(article);
    return articles;
  },
  update: async (id, article) => {
    const articles = await knex("articles").where("id", id).update({
      title: article.title,
      content: article.content,
      image: article.image,
    });
    return articles;
  },
  delete: async (id) => {
    const articles = await knex("articles").where("id", id).del();
    return articles;
  },
};
