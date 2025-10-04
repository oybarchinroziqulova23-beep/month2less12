import pool from "../db.js";

export const getTeams = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM teams");
        res.json(result.rows);
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

export const createTeams = async (req, res) => {
  const { team_id, team_name, club_id, group_id, coach_name } = req.body
  try {
      const result = await pool.query(
        "INSERT INTO teams (team_id, team_name, club_id, group_id, coach_name) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [team_id, team_name, club_id, group_id, coach_name]
      );
      res.json(result.rows[0])
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const updateTeams = async (req, res) => {
  const { id } = req.params
  const { team_name, coach_name } = req.body
  try {
      const result = await pool.query(
        "UPDATE teams SET team_name=$1, coach_name=$2 WHERE team_id=$3 RETURNING *",
        [team_name, coach_name, id]
      );
      res.json(result.rows[0])
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const deleteTeams = async (req, res) => {
  const { id } = req.params
  try {
      await pool.query("DELETE FROM teams WHERE team_id=$1", [id]);
      res.json({ message: "Team deleted" })
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}
