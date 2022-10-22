import express from "express";

const apiTokenRoute = express.Router();

apiTokenRoute.post("/edit", (req, res, next) =>
  res.send({ message: req.body.token ?? "no token" })
);

export default apiTokenRoute;
