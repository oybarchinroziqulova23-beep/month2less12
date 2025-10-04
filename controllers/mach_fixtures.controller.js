import pool from "../db.js";

export const getMach = async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM mach_fixtures");
        res.json(result.rows);
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

export const createMach = async (req, res) => {
  const { match_id, match_dat, venue, home_team_id, away_team_id, home_score, away_score, tournament_id, match_status } = req.body
  try {
      const result = await pool.query(
        "INSERT INTO mach_fixtures (match_id, match_dat, venue, home_team_id, away_team_id, home_score, away_score, tournament_id, match_status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
        [match_id, match_dat, venue, home_team_id, away_team_id, home_score, away_score, tournament_id, match_status]
      )
      res.json(result.rows[0]);
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const updateMach = async (req, res) => {
  const { id } = req.params
  const { home_score, away_score, match_status } = req.body
  try {
      const result = await pool.query(
        "UPDATE mach_fixtures SET home_score=$1, away_score=$2, match_status=$3 WHERE match_id=$4 RETURNING *",
        [home_score, away_score, match_status, id]
      )
      res.json(result.rows[0])
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const deleteMach = async (req, res) => {
  const { id } = req.params
  try {
      await pool.query("DELETE FROM mach_fixtures WHERE match_id=$1", [id])
      res.json({ message: "Fixture deleted" })
  }catch(err){
    res.status(500).json({ error: err.message })
  }
};
