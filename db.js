import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: "root",        
    password: "root",   
    host: "localhost",
    port: 5432,
    database: "football"
});

export default pool;
