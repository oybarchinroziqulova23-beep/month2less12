import { Router } from "express";
import { getTournamentG, createTournamentG, updateTournamentG, deleteTournamentG } from "../controllers/tournaments_groups.controller.js";

const router = Router();

router.get("/", getTournamentG);
router.post("/", createTournamentG);
router.patch("/:id", updateTournamentG);
router.delete("/:id", deleteTournamentG);

export default router;
