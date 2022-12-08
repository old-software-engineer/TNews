const passport = require("passport");
const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);

module.exports = () => {
  passport.serializeUser((user, done) => {
    if (user) {
      return done(null, user.id);
    }
    return done(null, false);
  });

  passport.deserializeUser((id, done) => {
    knex("users")
      .where({ id })
      .first()
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
};
