import express from "express";
import userController from "../controllers/userController.js";

const userRoute = express.Router()

userRoute.get('/list-user', userController.listUser)
userRoute.post('/register', userController.createNewUser)

export default userRoute