import express from "express";
import userController from "../controllers/userController.js";

const userRoute = express.Router()

userRoute.get('/list-user', userController.listUser)

export default userRoute