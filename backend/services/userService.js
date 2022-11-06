"use-strict";

const list = async (req) => {
  let data = await req.models.userModel.findAll({});
  return data;
};

const create = async (req, body) => {
  let data = await req.models.userModel.create(body);
  return data;
};

const login = async (req, body) => {
  let data = await req.models.userModel.findOne({
    where: { email: body.email, password: body.password },
  });
  return data;
};

const getByUsername = async (req, username) => {
  let data = await req.models.userModel.findOne({
    where: { username: username },
  });
  return data;
};

module.exports = { list, create, login, getByUsername };
