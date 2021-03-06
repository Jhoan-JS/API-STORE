const { Schema, model } = require("mongoose");

const ProductSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
      unique: true,
      trim: true
    },

    price: {
      type: Number,
      required: [true, "A product must have a price"],
      default: 1
    },

    quantity: {
      type: Number,
      require: [true, "A product must have a quantity"],
      default: 1
    },

    description: {
      type: String,
      trim: true
    },

    images: {
      url: String
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("Product", ProductSchema);
