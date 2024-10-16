import express from "express";
import testController from "../controllers/testController.js";

const testRouter = express.Router()

testRouter.get('/ver', testController.getNeonSqlVer)

export default testRouter