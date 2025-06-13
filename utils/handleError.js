const handleServerError = (res, message, error) => {
  res.status(500).json({
    success: false,
    message,
    error: error?.message || "Internal Server Error",
  });
};

module.exports = handleServerError;
