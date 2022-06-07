import express from "express";

import {CustomRequest} from "../Interfaces";

module.exports = (req: CustomRequest, res: express.Response, next: express.NextFunction) => {
  if (req?.user?.credits < 1) {
    return res.status(401).send({error: "Not enough credits"});
  }
  next();
};
