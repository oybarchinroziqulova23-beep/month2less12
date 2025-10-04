import { Router } from "express";
import { getFootballC, createFootballC, updateFootballC, deleteFootballC } from "../controllers/footballs_clubs.controller.js";

const router = Router();

router.get("/", getFootballC);
router.post("/", createFootballC);
router.patch("/:id", updateFootballC);
router.delete("/:id", deleteFootballC);

export default router;
