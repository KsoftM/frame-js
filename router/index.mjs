import express from "express";
import apiTokenRoute from "./apiToken.mjs";
import messageRoute from "./message.mjs";
import userRoute from "./user.mjs";

const baseRouter = express.Router();

baseRouter.use("/user", userRoute);
baseRouter.use("/message", messageRoute);
baseRouter.use("/token", apiTokenRoute);

export default baseRouter;
