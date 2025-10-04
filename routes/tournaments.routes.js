import { Router } from "express";
import { getTournaments, createTournament, updateTournament, deleteTournament } from "../controllers/tournaments.controller.js";

const router = Router();

router.get("/", getTournaments);
router.post("/", createTournament);
router.patch("/:id", updateTournament);
router.delete("/:id", deleteTournament);

export default router;
