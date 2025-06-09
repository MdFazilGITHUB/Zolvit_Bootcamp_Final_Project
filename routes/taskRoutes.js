const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { taskSchema } = require("../validators/task");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router
  .route("/")
  .post(validate(taskSchema), createTask)
  .get(getTasks);

router
  .route("/:id")
  .get(getTaskById)
  .put(validate(taskSchema), updateTask)
  .delete(deleteTask);

module.exports = router;
