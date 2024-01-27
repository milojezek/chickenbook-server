import express from "express";
import customController from "../controller/controller.js";

const router = express.Router();

const {homePage, add} = customController;

router.get("/", homePage);

router.get("/add", add);
router.post("/add", add);

export default router;
