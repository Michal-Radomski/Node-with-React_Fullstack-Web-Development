const express = require("express");
const mongoose = require("mongoose");
const mongoDB_key = require("./config/keys").mongoURI;

// console.log({mongoDB_key});

require("./services/passport"); //* Calling the function immediately instead of storing it in a variable
// const authRoutes = require("./routes/authRoutes");
require("./models/User");

const app = express();

// Connect to MongoDB
mongoose
  .connect(mongoDB_key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the MongoDB"))
  .catch((error: string) => console.log({error}));

// import {Request, Response} from "express";
// app.get("/", (req: Request, res: Response) => {
//   console.log("req.ip", req.ip);
//   res.send({hi: "there"});
// });

// authRoutes(app);
//* below the same
require("./routes/authRoutes")(app);

const PORT = (process.env.PORT || 5000) as number;

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
