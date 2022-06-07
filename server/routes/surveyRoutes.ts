import express from "express";
import mongoose from "mongoose";

const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
import {CustomRequest} from "../Interfaces";

const Survey = mongoose.model("surveys");

module.exports = (app: any) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req: CustomRequest, _res: express.Response) => {
    const {title, subject, body, recipients} = req.body;

    //* survey is an instance of Survey!
    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      // recipients: recipients.split(",").map((email: string) => {
      //   return {email: email.trim()};
      // }),

      //* The same as above
      recipients: recipients.split(",").map((email: string) => ({email: email.trim()})), //* returns an object {email:email}
      _user: req?.user?.id,
      dateSent: Date.now(),
    });
  });
};
