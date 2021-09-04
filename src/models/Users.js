const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "A user must have a email"],
      trim: true
    },

    password: {
      type: String,
      required: [true, "A user must have a password"],
      trim: true
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("User", UserSchema);
