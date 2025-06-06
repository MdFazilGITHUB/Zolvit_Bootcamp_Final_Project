const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ message: "Title is required and must be a string" });
  }

  const validStatus = ["pending", "in progress", "completed"];
  if (status && !validStatus.includes(status)) {
    return res.status(400).json({
      message: `Invalid status. Allowed: ${validStatus.join(", ")}`
    });
  }

  next();
};

module.exports = validateTask;
