const express = require("express");
const { createUser, getAllUsers, updateSingleUser, deleteSingleUser } = require("../controller/userTableController");
//const { homeRoute, update_user, add_user } = require("../services/render");
const router = express.Router();
// router.route("/").get(homeRoute);
// router.route("/update-user").get(update_user)
// router.route("/add-user").get(add_user);


//api
router.route("/api/users").post(createUser).get(getAllUsers);
// router.route("/api/users").get(getAllUsers);
router.route("/api/users/:id").put(updateSingleUser).delete(deleteSingleUser);

module.exports = router;

