import {Request, Response} from "express";

const requireLogin = require("../middleware/requireLogin");

module.exports = (app: any) => {
  app.post("/api/surveys", requireLogin, (req: Request, res: Response) => {});
};
