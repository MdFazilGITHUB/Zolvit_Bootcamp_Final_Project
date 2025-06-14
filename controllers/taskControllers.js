const Task = require("../models/taskModel");
const handleServerError = require("../utils/handleError");

// Create Task
const createTask = async (req, res) => {
  try {
    const { title, status, dueDate } = req.body;
    const task = await Task.create({
      title,
      status,
      dueDate,
      userRef: req.user._id,
    });
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    handleServerError(res, "Creating task failed", err);
  }
};

// Get all tasks for logged-in user
const getTasks = async (req, res) => {
  try {
    const { status, dueDate } = req.query;
    const filter = { userRef: req.user._id };

    if (status) filter.status = status;
    if (dueDate) filter.dueDate = dueDate;

    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (err) {
    handleError(res, "Fetching tasks failed", err);
  }
};

// Get single task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userRef: req.user._id,
    });
    if (!task)
      return res.status(404).json({ success: false, message: "Task not found" });
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    handleServerError(res, "Fetching task failed", err);
  }
};

// Update task
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, userRef: req.user._id },
      req.body,
      { new: true }
    );
    if (!updatedTask)
      return res.status(404).json({ success: false, message: "Task not found" });
    res.status(200).json({ success: true, data: updatedTask });
  } catch (err) {
    handleServerError(res, "Updating task failed", err);
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userRef: req.user._id,
    });
    if (!task)
      return res.status(404).json({ success: false, message: "Task not found" });
    res.status(200).json({ success: true, message: "Task deleted successfully" });
  } catch (err) {
    handleServerError(res, "Deleting task failed", err);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
