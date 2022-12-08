const bcrypt = require("bcryptjs");
const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);

function handleErrors(req) {
    return new Promise((resolve, reject) => {
      if (req.body.name.length < 6) {
        reject({
          message: "Name must be longer than 6 characters",
        });
      } else if (req.body.password.length < 6) {
        reject({
          message: "Password must be longer than 6 characters",
        });
      } else {
        resolve();
      }
    });
  }

function createUser(req, res) {
  return handleErrors(req)
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(req.body.password, salt);
      return knex("users")
        .insert({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        })
        .returning("*");
    })
    .catch((err) => {
      res.status(400).json({ status: err.message });
    });
}

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}


module.exports = {
  createUser,
  comparePass,
  handleErrors,
};
