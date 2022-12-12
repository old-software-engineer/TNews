const userService = require("../services/userService");
const authHelper = require("../utils/auth");
const helper = require("../utils/common");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

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

const registerUser = async (req, res) => {
  const user = await userService.getByEmail(req.body.email);
  if (user) {
    return helper.handleResponse(res, 401, "User already exists");
  } else {
    try {
      handleErrors(req);
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(req.body.password, salt);
      const user = await userService.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });

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
    } catch (err) {
      helper.handleResponse(res, 500, err);
    }
  }
};

const updateUser = async (req, res) => {
  const user = await userService.getByEmail(req.body.email);
  if (user) {
    return helper.handleResponse(res, 401, "User already exists");
  } else {
    try {
      handleErrors(req);
      const { id, name, email } = req.body;
      const user = await userService.update(id, { name, email });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
};

const updatePassword = async (req, res, next) => {
  try {
    const { id, old_password, new_password } = req.body;
    const user = await userService.getById(id);
    if (authHelper.comparePass(old_password, user.password)) {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(new_password, salt);
      const user = await userService.updatePassword(id, hash);
      res.json(user);
    } else {
      helper.handleResponse(res, 401, "Old password is incorrect");
    }
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res) => {
  const user = req.user;
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

module.exports = {
  getAllUsers,
  registerUser,
  updateUser,
  updatePassword,
  loginUser,
};
