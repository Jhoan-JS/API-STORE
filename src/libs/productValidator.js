const Joi = require("joi");

//Add image validator later

const ProductSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  price: Joi.number().required().min(1).positive(),
  quantity: Joi.number().required().min(1).positive(),
  description: Joi.string().alphanum()
});

module.exports = ProductSchema;
