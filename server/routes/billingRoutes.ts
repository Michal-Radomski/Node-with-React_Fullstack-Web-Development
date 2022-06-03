const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
import {Request, Response} from "express";

module.exports = (app: {post: (arg0: string, arg1: any) => void}) => {
  app.post("/api/stripe", (req: Request, res: Response) => {});
};
