import express = require("express");
import bodyParser = require("body-parser");
import { errors } from "celebrate";
import { Request, Response, NextFunction } from "express";

import { StatusError } from "misc/Errors";

const app = express();

app.use(bodyParser.json());
app.use(errors());
app.use(
  (err: StatusError, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status).json({ Error: err.message });
  }
);

export default app;
