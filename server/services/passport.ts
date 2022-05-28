const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID as string,
      clientSecret: keys.googleClientSecret as string,
      callbackURL: "/auth/google/callback" as string,
    },
    (accessToken: string, _refreshToken: string | undefined, _profile: Object, _done: void) => {
      console.log({accessToken});
      // console.log({refreshToken});
      // console.log({profile});
      // console.log(typeof done);
    }
  )
);
