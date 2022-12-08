const knex = require("../db");
const authHelper = require("../utils/auth");
const helper = require("../utils/common");

const getAllUsers = (req, res) => {
  knex("users")
    .select({
      id: "id",
      name: "name",
    })
    .then((users) => {
      return res.json(users);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
};

const registerUser = async (req, res) => {
  const user = await knex("users").where({ email: req.body.email }).first();
  if (user) {
    return helper.handleResponse(res, 401, "User already exists");
  } else {
    return authHelper
      .createUser(req, res)
      .then((response) => {
        const user = response[0];
        const payload = {
          name: user.name,
          id: user.id,
          email: user.email,
        };
        const token = helper.jwtTokenCreation(payload);
        helper.handleResponseWithData(res, 200, {
          user,
          token: "Bearer " + token,
        });
      })
      .catch((err) => {
        helper.handleResponse(res, 500, "error");
      });
  }
};

const loginUser = async (req, res) => {
  const user = await knex("users").where({ email: req.body.email }).first();
  if (!user) return helper.handleResponse(res, 401, "Wrong username");

  if (!authHelper.comparePass(req.body.password, user.password)) {
    return helper.handleResponse(res, 401, "Wrong password");
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = helper.jwtTokenCreation(payload);

  res.status(200).send({
    success: true,
    message: "Logged in Successfully",
    token: "Bearer " + token,
    user: payload,
  });
};

module.exports = { getAllUsers, registerUser, loginUser };
