const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
import {Request, Response} from "express";

module.exports = (app: {post: (arg0: string, arg1: Object) => void}) => {
  app.post("/api/stripe", async (req: Request, _res: Response) => {
    // console.log("req.body:", req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    // console.log({charge});
    // console.log({_res});
  });
};
