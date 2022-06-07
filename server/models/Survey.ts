import mongoose from "mongoose";
const {Schema} = mongoose;
const RecipientSchema = require("./Recipients");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  // recipients: [String],
  recipients: [RecipientSchema], //* Array of RecipientSchema records
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0},
});

mongoose.model("surveys", surveySchema);
