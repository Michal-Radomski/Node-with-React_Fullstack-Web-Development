import express from "express";
import mongoose from "mongoose";

const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
import {CustomRequest} from "../Interfaces";
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

type Post = void | ((req: CustomRequest, res: express.Response) => void); //* It is correct?

module.exports = (app: {
  post: (arg0: string, arg1: Post, arg2?: void, arg3?: (req: CustomRequest, res: express.Response) => void) => void;
  get: (arg0: string, arg1: (req: express.Request, res: express.Response) => void) => void;
}) => {
  app.get("/api/surveys/thanks", (req: express.Request, res: express.Response) => {
    console.log("req.ip:", req.ip);
    res.send("Thanks for Voting!");
  });

  app.post("/api/surveys/webhooks", (req: CustomRequest, res: express.Response) => {
    console.log("req.body:", req.body);
    console.log("req.ip:", req.ip);
    console.log("Current Time:", new Date().toLocaleString());
    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req: CustomRequest, res: express.Response) => {
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
    // console.log(survey);

    //* Place to send and email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    // console.log({mailer});

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      console.log({error});
      res.status(422).send(error);
    }
  });
};
