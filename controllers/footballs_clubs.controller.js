import pool from "../db.js";

export const getFootballC = async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM football_clubs");
        res.json(result.rows);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};

export const createFootballC = async (req, res) => {
  const { club_id, club_nmae, city, country, founded_year } = req.body
  try {
      const result = await pool.query(
        "INSERT INTO football_clubs (club_id, club_nmae, city, country, founded_year) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [club_id, club_nmae, city, country, founded_year]
      );
      res.json(result.rows[0]);
  } catch(err){
    res.status(500).json({ error: err.message });
  }
};

export const updateFootballC = async (req, res) => {
  const { id } = req.params;
  const { club_nmae, city } = req.body
  try {
      const result = await pool.query(
        "UPDATE football_clubs SET club_nmae=$1, city=$2 WHERE club_id=$3 RETURNING *",
        [club_nmae, city, id]
      );
      res.json(result.rows[0]);
  } catch(err){
    res.status(500).json({ error: err.message });
  }
};

export const deleteFootballC = async (req, res) => {
  const { id } = req.params
  try {
      await pool.query("DELETE FROM football_clubs WHERE club_id=$1", [id]);
      res.json({ message: "Club deleted" });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
};
