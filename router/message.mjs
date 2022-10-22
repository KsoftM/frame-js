import express from "express";

const messageRoute = express.Router();

messageRoute.all("/path", (req, res, next) => {});

export default messageRoute;
