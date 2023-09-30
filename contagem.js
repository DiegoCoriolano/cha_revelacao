const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgres://default:tU2Jxz5CdPsW@ep-solitary-voice-18493958-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
});

const verSexo = async () => {
  try {
    const sexoMenino = await pool.query("select menino from contagemsexo");
  } catch (error) {
    console.log(error.message);
  }
  console.log(sexoMenino);
};
