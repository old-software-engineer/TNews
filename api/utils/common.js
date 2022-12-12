const jwt = require("jsonwebtoken");
require("dotenv").config();

function handleResponse(res, code, statusMsg) {
  res.status(code).json({ status: statusMsg });
}

function handleResponseWithData(res, code, data) {
  res.status(code).json(data);
}

function jwtTokenCreation(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET);
}

module.exports = {
  handleResponse,
  handleResponseWithData,
  jwtTokenCreation,
};
