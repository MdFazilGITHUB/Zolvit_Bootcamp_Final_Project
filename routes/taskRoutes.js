const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskControllers");
const validateTask = require("../middlewares/validateTask");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

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
