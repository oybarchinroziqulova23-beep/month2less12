import pool from "../db.js";

export const getTournaments = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tournaments")
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const createTournament = async (req, res) => {
    const { tournament_id, tournament_name, start_date, end_date, status } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO tournaments (tournament_id, tournament_name, start_date, end_date, status) VALUES ($1,$2,$3,$4,$5) RETURNING *",
            [tournament_id, tournament_name, start_date, end_date, status]
        )
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const updateTournament = async (req, res) => {
    const { id } = req.params;
    const { tournament_name, start_date, end_date, status } = req.body;
    try {
        const result = await pool.query(
            "UPDATE tournaments SET tournament_name=$1, start_date=$2, end_date=$3, status=$4 WHERE tournament_id=$5 RETURNING *",
            [tournament_name, start_date, end_date, status, id]
        )
        if (result.rows.length === 0) return res.status(404).json({ message: "Tournament not found" })
        res.json(result.rows[0])
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteTournament = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM tournaments WHERE tournament_id=$1 RETURNING *", [id]);
        if (result.rows.length === 0) return res.status(404).json({ message: "Tournament not found" });
        res.json({ message: "Tournament deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};
