"use-strict";

const express = require("express");
const router = express.Router();
const jwt = require("../utils/jwt");
const authToken = jwt.authenticateToken;
const userController = require("../controllers/userController");
const jobController = require("../controllers/jobController");

module.exports = (app) => {
  // user management
  router.post("/user/create", userController.createUser);
  router.post("/user/update/:id", authToken, userController.updateUser);
  router.post("/user/delete/:id", authToken, userController.deleteUser);
  router.get("/user", authToken, userController.listUser);
  router.get("/user/detail/:id", authToken, userController.detailUser);
  router.post("/login", userController.login);

  //job
  router.get("/jobs", jobController.jobController);
  router.get("/alljobs", jobController.alljobController);
  router.get("/jobs/search", authToken, jobController.jobSearchController);

  app.use("/api", router);
};