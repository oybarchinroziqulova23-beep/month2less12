import pool from "../db.js";

export const getTournamentG = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tournament_groups")
        res.json(result.rows)
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

export const createTournamentG = async (req, res) => {
  const { group_id, group_name, tournament_id } = req.body
  try {
      const result = await pool.query(
        "INSERT INTO tournament_groups (group_id, group_name, tournament_id, created_at) VALUES ($1,$2,$3,NOW()) RETURNING *",
        [group_id, group_name, tournament_id]
      )
      res.json(result.rows[0])
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const updateTournamentG = async (req, res) => {
  const { id } = req.params
  const { group_name } = req.body
  try{
      const result = await pool.query(
        "UPDATE tournament_groups SET group_name=$1 WHERE group_id=$2 RETURNING *",
        [group_name, id]
      )
      res.json(result.rows[0])
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

export const deleteTournamentG = async (req, res) => {
  const { id } = req.params
  try {
      await pool.query("DELETE FROM tournament_groups WHERE group_id=$1", [id])
      res.json({ message: "Group deleted" })
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}
