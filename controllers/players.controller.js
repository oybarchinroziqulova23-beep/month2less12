import pool from "../db.js";

export const getPlayers = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM players");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const createPlayer = async (req, res) => {
    const { player_id, full_name, date_of_birth, position, team_id, jersey_number } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO players (player_id, full_name, date_of_birth, position, team_id, jersey_number) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [player_id, full_name, date_of_birth, position, team_id, jersey_number]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updatePlayer = async (req, res) => {
    const { id } = req.params;
    const { full_name, position, jersey_number } = req.body;
    try {
        const result = await pool.query(
            "UPDATE players SET full_name=$1, position=$2, jersey_number=$3 WHERE player_id=$4 RETURNING *",
            [full_name, position, jersey_number, id]
        );
        if (result.rows.length === 0) return res.status(404).json({ message: "Player not found" });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deletePlayer = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM players WHERE player_id=$1 RETURNING *", [id]);
        if (result.rows.length === 0) return res.status(404).json({ message: "Player not found" });
        res.json({ message: "Player deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
