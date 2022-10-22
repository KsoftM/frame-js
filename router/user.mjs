import express from "express";
import UserController from "../app/controllers/UserController.mjs";

const userRoute = express.Router();

userRoute.post("/", UserController.index);
userRoute.post("/:id", UserController.show);

export default userRoute;
