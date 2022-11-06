"use-strict";

const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

const listUser = async (req, res) => {
  let data = await req.services.userService.list(req);

  let objectResponse = await {
    error: false,
    message: "Found",
    data: data,
  };

  return req.output(req, res, objectResponse, "info", 200);
};

const createUser = async (req, res) => {
  let toValidate = [
    {
      name: "username",
      value: req.body.username,
    },
    {
      name: "password",
      value: req.body.password,
    },
  ];
  req.validation.validate(toValidate, (err) => {
    if (err) {
      return req.output(req, res, err, "error", 400);
    }
  });

  let exUser = await req.services.userService.getByUsername(req, req.body.username);
  if (exUser != null) {
    let errMsg = await {
      error: true,
      message: "Username sudah terdaftar",
    };
    return req.output(req, res, errMsg, "error", 400);
  }

  console.log(exUser)

  let hash = bcrypt.hashSync(req.body.password, 10);
  let body = {
    username: req.body.username,
    password: hash,
  };

  let data = await req.services.userService.create(req, body);

  console.log('data ', data);

  let objectResponse = await {
    error: false,
    message: "Created",
  };

  return req.output(req, res, objectResponse, "info", 200);
};

const login = async (req, res) => {
  let toValidate = [
    {
      name: "username",
      value: req.body.username,
    },
    {
      name: "password",
      value: req.body.password,
    },
  ];
  req.validation.validate(toValidate, (err) => {
    if (err) {
      return req.output(req, res, err, "error", 400);
    }
  });

  let exUser = await req.services.userService.getByUsername(req, req.body.username);
  if (exUser == null) {
    let errMsg = await {
      error: true,
      message: "Username tidak terdaftar",
    };
    return req.output(req, res, errMsg, "error", 400);
  }

  let checkPass = await bcrypt.compare(req.body.password, exUser.password);
  if (!checkPass) {
    let errMsg = await {
      error: true,
      message: "Password tidak sesuai",
    };
    return req.output(req, res, errMsg, "error", 400);
  }

  let body = {
    username: exUser.username,
    user_id: exUser.id,
  };
  let token = jwt.generateAccessToken(body);
  let objectResponse = await {
    error: false,
    message: "Logged in",
    data: {
      username: exUser.username,
      token: token,
    },
  };

  return req.output(req, res, objectResponse, "info", 200);
};

module.exports = {
  listUser,
  createUser,
  login,
};
