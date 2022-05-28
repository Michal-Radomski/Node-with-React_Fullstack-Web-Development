import passport from "passport";

module.exports = (app: {get: (arg0: string, arg1: any) => void}) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google", {failureRedirect: "/login"}));
};
