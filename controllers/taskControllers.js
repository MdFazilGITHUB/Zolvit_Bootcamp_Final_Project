const Task = require("../models/taskModel");

// Create Task
const createTask = async (req, res) => {
  try {
    const { title, status, dueDate } = req.body;
    const task = await Task.create({
      title,
      status,
      dueDate,
      userRef: req.user._id, // ✅ Securely linked to token
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Creating task failed", error: err.message });
  }
};

// Get all tasks for logged-in user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userRef: req.user._id });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Fetching tasks failed", error: err.message });
  }
};

// Get single task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userRef: req.user._id,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: "Fetching task failed", error: err.message });
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
    if (!updatedTask) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: "Updating task failed", error: err.message });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userRef: req.user._id,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Deleting task failed", error: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
