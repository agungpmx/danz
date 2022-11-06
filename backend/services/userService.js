"use-strict";

const list = async (req) => {
  let data = await req.models.userModel.findAll({});
  return data;
};

const detail = async (req, id) => {
  let data = await req.models.userModel.findOne({
    where: { id: id },
  });
  return data;
};

const create = async (req, body) => {
  let data = await req.models.userModel.create(body);
  return data;
};

const update = async (req, id, body) => {
  let data = await req.models.userModel.update(body, {
    where: { id: id },
  });
  return data;
};

const destroy = async (req, id) => {
  let data = await req.models.userModel.destroy({
    where: { id: id },
  });
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
// const assignRole = async (req, user, role) => {
//     let data = await req.models.userModel.update({
//
//     })
// };

module.exports = { list, detail, create, update, destroy, login, getByUsername };
