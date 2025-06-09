const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().required(),
  status: Joi.string().valid("pending", "in progress", "done"),
  dueDate: Joi.date().optional(),
});

module.exports = { taskSchema };
