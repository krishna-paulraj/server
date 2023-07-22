const express = require("express");

const {
  getAllUsers,
  getUserById,
  getUserByIdAndUpdate,
  getUserByIdAndDelete,
  createUser,
} = require("../controller");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(getUserByIdAndUpdate)
  .delete(getUserByIdAndDelete);

module.exports = router;
