import { Router } from "express";
import { getMach, createMach, updateMach, deleteMach } from "../controllers/mach_fixtures.controller.js";

const router = Router();

router.get("/", getMach);
router.post("/", createMach);
router.patch("/:id", updateMach);
router.delete("/:id", deleteMach);

export default router;
