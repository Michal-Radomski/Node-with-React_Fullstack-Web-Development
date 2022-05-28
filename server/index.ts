const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("./config/keys");

const app = express();

import {Request, Response} from "express";
app.get("/", (req: Request, res: Response) => {
  console.log("req.ip", req.ip);
  res.send({hi: "there"});
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID as string,
      clientSecret: keys.googleClientSecret as string,
      callbackURL: "/auth/google/callback" as string,
    },
    (accessToken: string, refreshToken: string | undefined, profile: Object, done: void) => {
      console.log({accessToken});
      console.log({refreshToken});
      console.log({profile});
      console.log(typeof done);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {failureRedirect: "/login"}),
  function (_req: Request, res: Response) {
    // Successful authentication, redirect "/".
    res.redirect("/");
  }
);

const PORT = (process.env.PORT || 5000) as number;

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
