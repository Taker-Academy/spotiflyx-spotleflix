const express = require('express');
const port = 8080;
require('dotenv').config();
const connectDB = require("./config/db");
const app = express();
const cors = require('cors');
const { initTable } = require('./config/init_db');

connectDB();
initTable();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/auth", require("./routes/routes_auth"));

/* LANCEMENT SERVEUR */
app.listen(port, () => console.log("Server in port " +  port + " is OK !"));
