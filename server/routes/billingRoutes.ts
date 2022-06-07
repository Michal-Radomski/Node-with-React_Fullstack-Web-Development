import express from "express";

const keys = require("../config/keys");

// const stripe = require("stripe")(keys.stripeSecretKey);
import Stripe from "stripe";

import {CustomRequest} from "../Interfaces";

const stripe = new Stripe(keys.stripeSecretKey, {
  apiVersion: "2020-08-27",
  timeout: 10000,
});

const requireLogin = require("../middleware/requireLogin");

module.exports = (app: {post: (arg0: string, arg1: void, arg2: Object) => void}) => {
  app.post("/api/stripe", requireLogin, async (req: CustomRequest, res: express.Response) => {
    //* requireLogin is used instead of condition IF below:
    // if (!req.user) {
    //   return res.status(401).send({error: "You must logged in!"});
    // }
    // console.log("req.body:", req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      // @ts-ignore
      source: req.body?.id,
    });
    // console.log({charge});
    // console.log({res});
    // console.log("req.user:", req.user);

    if (req && req.user) {
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
    }
  });
};
