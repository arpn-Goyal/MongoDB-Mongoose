import e from "express";
import dotenv from "dotenv";
dotenv.config();

import databaseConnect from './Database/connection.js';

databaseConnect();

const app = e();
const PORT = process.env.PORT || 4000;
// const port = 5000;

app.get('/', (req, res)=> res.send(`Blog API Working`))

app.listen(PORT, ()=> console.log(`Server running on port, http://localhost:${PORT}`))