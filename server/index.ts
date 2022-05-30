const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const mongoDB_key = require("./config/keys").mongoURI;
const cookie_Key = require("./config/keys").cookieKey;

// console.log({mongoDB_key});

require("./models/User");
require("./services/passport"); //* Calling the function immediately instead of storing it in a variable
// const authRoutes = require("./routes/authRoutes");

// Connect to MongoDB
mongoose
  .connect(mongoDB_key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the MongoDB"))
  .catch((error: string) => console.log({error}));

const app = express();

// import {Request, Response} from "express";
// app.get("/", (req: Request, res: Response) => {
//   console.log("req.ip", req.ip);
//   res.send({hi: "there"});
// });

app.use(
  cookieSession({
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [cookie_Key],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// authRoutes(app);
//* below the same
require("./routes/authRoutes")(app);

const PORT = (process.env.PORT || 5000) as number;

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});

//* For testing only
const now: Date = new Date();
console.log("Current time:", now.toLocaleString());
