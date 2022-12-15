const knex = require("../db");

module.exports = articleService = {
  getAll: async (dateOrder) => {
    const articles = await knex("articles")
      .join("users", "users.id", "articles.user_id")
      .join("categories", "categories.id", "articles.category_id")
      .select(
        "articles.*",
        "users.name as user_name",
        "users.email",
        "categories.name as category_name"
      )
      .orderBy("created_at", dateOrder)
      .where({ public_access: true });
    return articles;
  },
  getByCategoryId: async (category_id) => {
    const articles = await knex("articles")
      .join("users", "users.id", "articles.user_id")
      .join("categories", "categories.id", "articles.category_id")
      .select(
        "articles.*",
        "users.name as user_name",
        "users.email",
        "categories.name as category_name"
      )
      .where({ category_id, public_access: true });
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
  checkUserArticle: async (article_id, user_id) => {
    const article = await knex("articles")
      .where({ id: article_id, user_id })
      .first();
    return article;
  },
  getByArticleId: async (article_id) => {
    const article = await knex("articles")
      .where("articles.id", article_id)
      .first();
    return article;
  },
  create: async (article) => {
    const articles = await knex("articles").insert(article).returning("*");
    return articles;
  },
  update: async (id, article) => {
    const result = await knex("articles")
      .where("id", id)
      .update({
        title: article.title,
        description: article.description,
        public_access: article.public_access,
        category_id: article.category_id,
      })
      .returning("*");
    return result;
  },
  delete: async (id) => {
    const articles = await knex("articles").where("id", id).del();
    return articles;
  },
};
