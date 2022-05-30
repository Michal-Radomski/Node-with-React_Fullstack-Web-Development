export {};
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
import {ObjectId} from "mongoose";

const keys = require("../config/keys");

const User = mongoose.model("users");

interface Profile extends Object {
  displayName: string;
  id: string;
  _id: ObjectId; //* MongoDB _Id
}

passport.serializeUser((user: Profile, done: (arg0: null, arg1: ObjectId) => void) => {
  done(null, user._id);
});

passport.deserializeUser((_id: ObjectId, done: (arg0: null, arg1: Profile) => void) => {
  User.findById(_id).then((user: Profile) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID as string,
      clientSecret: keys.googleClientSecret as string,
      callbackURL: "/auth/google/callback" as string,
    },
    (
      accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: (arg0: null, arg1: Profile) => void //* done -> callback(error, existingRecord)
    ) => {
      console.log({accessToken});
      // console.log({refreshToken});
      // console.log({profile});
      // console.log(typeof done);

      User.findOne({googleID: profile.id}).then((existingUser: Profile) => {
        if (existingUser) {
          // We already have a record with the given profile ID
          console.log({existingUser});
          done(null, existingUser);
        } else {
          // We don't have a user with this ID, make a new record
          new User({
            googleID: profile.id,
            name: profile.displayName,
          })
            .save()
            .then((user: Profile) => {
              done(null, user);
              console.log("user was added to the MongoDB");
            });
        }
      });
    }
  )
);
