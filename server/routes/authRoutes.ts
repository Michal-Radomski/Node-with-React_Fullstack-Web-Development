import passport from "passport";
import {Request, Response} from "express";

module.exports = (app: {get: (arg0: string, arg1: any) => void}) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/surveys",
      failureRedirect: "/login",
    })
  );

  app.get("/api/logout", (req: Request, res: Response) => {
    // res.send(req.user);
    res.redirect(200, "/");
    setTimeout(() => {
      req.logout();
      console.log("Logged Out");
    }, 500);
  });

  app.get("/api/current_user", (req: Request, res: Response) => {
    // console.log("req.user:", req.user);
    // console.log("req.session:", req.session);
    res.send(req.user);
  });

  app.get("/login", (_req: Request, res: Response) => {
    res.send("Log In");
  });

  app.get("/", (req: Request, res: Response) => {
    console.log("req.ip", req.ip);
    res.send("Home Page");
  });
};
