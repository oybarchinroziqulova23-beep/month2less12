import { Router } from "express";
import { getPlayers, createPlayer, updatePlayer, deletePlayer } from "../controllers/players.controller.js";

const router = Router();

router.get("/", getPlayers);
router.post("/", createPlayer);
router.patch("/:id", updatePlayer);
router.delete("/:id", deletePlayer);

export default router;
