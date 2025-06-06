const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskControllers");
const validateTask = require("../middlewares/validateTask");

const router = express.Router();

router
  .route("/")
  .post(validateTask, createTask)
  .get(getTasks);

router
  .route("/:id")
  .get(getTaskById)
  .put(validateTask, updateTask)
  .delete(deleteTask);

module.exports = router;
