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
  router.get("/user", authToken, userController.listUser);
  router.post("/login", userController.login);

  //job
  router.get("/jobs", jobController.jobController);
  router.get("/alljobs", jobController.alljobController);
  router.get("/detailJobs", authToken, jobController.jobDetailController);
  router.get("/jobs/search", authToken, jobController.jobSearchController);

  app.use("/api", router);
};