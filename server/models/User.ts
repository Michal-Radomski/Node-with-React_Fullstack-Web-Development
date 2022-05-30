import mongoose from "mongoose";

// const Schema = mongoose.Schema;
//* Below the same - Destructuring assignment
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String,
});

// module.exports = mongoose.model("users", userSchema);
mongoose.model("users", userSchema);
