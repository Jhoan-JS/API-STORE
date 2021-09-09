const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
      trim: true,
      unique: true
    },

    password: {
      type: String,
      required: [true, "A user must have a password"],
      trim: true,
      select: false
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  },
  { timestamps: true, versionKey: false }
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = 10;

  const hash = await bcrypt.hash(password, salt);

  return hash;
};

UserSchema.methods.comparePassword = async function (confirmPassword) {
  return await bcrypt.compare(confirmPassword, this.password);
};

module.exports = model("User", UserSchema);
