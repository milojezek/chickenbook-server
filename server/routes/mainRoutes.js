import express from "express";
import customController from "../controller/controller.js";

const router = express.Router();

const {homePage} = customController;

router.get("/", homePage);

export default router;
