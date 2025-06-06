const Task = require("../models/taskModel");

// Create task
const createTask = async (req, res) => {
  try {
    const { title, status, dueDate, userRef } = req.body;
    const task = await Task.create({ title, status, dueDate, userRef });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Creating task failed", error: err.message });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Fetching tasks failed", error: err.message });
  }
};

// Get single task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: "Fetching task failed", error: err.message });
  }
};

// Update task
const updateTask = async (req, res) => {
  try {
    const { title, status, dueDate } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, status, dueDate },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: "Updating task failed", error: err.message });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
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
