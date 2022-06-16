const express = require("express");
import {Request, Response} from "express";
// import localtunnel from "localtunnel";
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const mongoDB_key = require("./config/keys").mongoURI;
const cookie_Key = require("./config/keys").cookieKey;

// console.log({mongoDB_key});
// console.log({cookie_Key});

require("./models/User");
require("./models/Survey");
require("./services/passport"); //* Calling the function immediately instead of storing it in a variable
// const authRoutes = require("./routes/authRoutes");

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDB_key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the MongoDB"))
  .catch((error: string) => console.log({error}));

const app = express();

app.use(bodyParser.json());
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
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

const PORT = (process.env.PORT || 5000) as number;

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req: Request, res: Response) => {
    console.log("req.ip:", req.ip);
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});

//* For testing only
const now: Date = new Date();
console.log("Current time:", now.toLocaleString());

//* Function to run localtunnel with a custom subdomain:
//* https://fanrrjewprg0pweu.loca.lt
// (async () => {
//   const tunnel = await localtunnel({port: 5000, subdomain: "fanrrjewprg0pweu"});

//   console.log(tunnel.url);

//   tunnel.on("close", () => {
//     console.log("\nTunnel closed");
//   });

//   process.on("SIGINT", () => {
//     console.log("test");
//     tunnel.close();
//     process.exit(0);
//   });
// })();
