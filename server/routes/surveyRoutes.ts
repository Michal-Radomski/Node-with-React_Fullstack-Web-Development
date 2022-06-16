import express from "express";
import mongoose from "mongoose";

const _ = require("lodash");
const {Path} = require("path-parser");
const {URL} = require("url");

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
  app.get("/api/surveys/:surveyId/:choice", (req: express.Request, res: express.Response) => {
    console.log("req.ip:", req.ip);
    res.send("Thanks for Voting!");
  });

  app.post("/api/surveys/webhooks", (req: CustomRequest, res: express.Response) => {
    console.log("Current Time:", new Date().toLocaleString());
    // const events = _.map(req.body, (event: {url: string; email: string}) => {
    //   const pathname = new URL(event.url).pathname;
    //   const parser = new Path("/api/surveys/:surveyId/:choice");
    //   // console.log(parser.test(pathname));
    //   const match = parser.test(pathname);
    //   if (match) {
    //     return {email: event.email, surveyID: match.surveyId, choice: match.choice};
    //   }
    // });

    //* After Refactoring
    // const events = _.map(req.body, ({url, email}: {url: string; email: string}) => {
    //   const pathname = new URL(url).pathname;
    //   const parser = new Path("/api/surveys/:surveyId/:choice");
    //   // console.log(parser.test(pathname));
    //   const match = parser.test(pathname);
    //   if (match) {
    //     return {email, surveyID: match.surveyId, choice: match.choice};
    //   }
    // });
    // // console.log({events});
    // const compactEvents = _.compact(events);
    // const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyID");
    // console.log({uniqueEvents});
    // res.send({});

    //* After Refactoring_2
    const parser = new Path("/api/surveys/:surveyId/:choice");
    _.chain(req.body)
      .map(({url, email}: {url: string; email: string}) => {
        const match = parser.test(new URL(url).pathname);
        if (match) {
          return {email, surveyID: match.surveyId, choice: match.choice};
        }
      })
      .compact()
      .uniqBy("email", "surveyID")
      .each(({surveyId, email, choice}: {surveyId: string; email: string; choice: string}) => {
        // console.log({choice});
        Survey.updateOne(
          {
            _id: surveyId, //* _id in MongoDB
            recipients: {
              $elemMatch: {email: email, responded: false},
            },
          },
          {
            $inc: {[choice]: 1},
            $set: {"recipients.$.responded": true},
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();
    // console.log({uniqueEvents});
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
