// import {Request, Response, NextFunction} from "express";
//* The other way
import express from "express";

module.exports = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  //* next -> call next middleware!
  if (!req.user) {
    return res.status(401).send({error: "You must logged in!"});
  }
  next();
};
