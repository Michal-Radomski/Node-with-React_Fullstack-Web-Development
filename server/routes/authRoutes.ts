export {}; //* Cannot redeclare block-scoped variable 'passport'.ts(2451)
// import passport from "passport";
const passport = require("passport");
import {Request, Response} from "express";

module.exports = (app: {get: (arg0: string, arg1: any) => void}) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google", {failureRedirect: "/login"}));

  app.get("/api/logout", (req: Request, res: Response) => {
    res.send(req.user);
    req.logout();
  });

  app.get("/api/current_user", (req: Request, res: Response) => {
    res.send(req.user);
  });
};
