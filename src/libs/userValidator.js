const Joi = require("joi");

const UserSchema = Joi.object({
  userName: Joi.string().required().min(3).max(15),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(30)
});

module.exports = UserSchema;
