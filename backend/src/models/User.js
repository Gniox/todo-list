const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tasks: { type: [String], required: true },
  },
  { timestamps: true }
);

// userSchema.static.findByLogin = async function (login) {
//   let user = await this.findOne({
//     username: login,
//   });

//   if(!user) {
//     user = await this.findOne({ email: login});
//   }

//   return user;
// };

module.exports = mongoose.model("user", UserSchema);
