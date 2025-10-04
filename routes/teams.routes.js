import { Router } from "express";
import { getTeams, createTeams, updateTeams, deleteTeams } from "../controllers/teams.controller.js";

const router = Router();

router.get("/", getTeams);
router.post("/", createTeams);
router.patch("/:id", updateTeams);
router.delete("/:id", deleteTeams);

export default router;
