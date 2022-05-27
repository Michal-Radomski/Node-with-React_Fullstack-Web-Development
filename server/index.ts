const express = require("express");
import {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  console.log("req.ip", req.ip);
  res.send({hi: "there"});
});

const PORT = (process.env.PORT || 5000) as number;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
