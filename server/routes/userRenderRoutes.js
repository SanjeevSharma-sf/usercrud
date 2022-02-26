const express = require("express");
const { homeRoute, update_user, add_user } = require("../services/render");
const router = express.Router();
router.route("/").get(homeRoute);
router.route("/update-user").get(update_user)
router.route("/add-user").get(add_user);


module.exports = router;