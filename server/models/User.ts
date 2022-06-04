import mongoose from "mongoose";

// const Schema = mongoose.Schema;
//* Below the same - Destructuring assignment
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String,
  credits: {
    type: Number,
    default: 0,
  },
});

// module.exports = mongoose.model("users", userSchema);
mongoose.model("users", userSchema);
