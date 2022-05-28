const express = require("express");

require("./services/passport"); //* Calling the function immediately instead of storing it in a variable
// const authRoutes = require("./routes/authRoutes");

const app = express();

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
