const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().required(),
  status: Joi.string().valid("pending", "in progress", "completed"),
  dueDate: Joi.date().optional(),
  tags: Joi.array().items(Joi.string())
});

module.exports = { taskSchema };
