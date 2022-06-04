const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
import {Request, Response} from "express";

const requireLogin = require("../middleware/requireLogin");

interface CustomRequest extends Request {
  user: {
    credits: number;
    save(): void;
  };
}

module.exports = (app: {post: (arg0: string, arg1: void, arg2: Object) => void}) => {
  app.post("/api/stripe", requireLogin, async (req: CustomRequest, res: Response) => {
    //* requireLogin is used instead of condition IF below:
    // if (!req.user) {
    //   return res.status(401).send({error: "You must logged in!"});
    // }
    // console.log("req.body:", req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
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
