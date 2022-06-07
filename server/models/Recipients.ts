import mongoose from "mongoose";
const {Schema} = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: {type: Boolean, default: false},
});

module.exports = recipientSchema;
