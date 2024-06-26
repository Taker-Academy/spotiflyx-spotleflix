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

app.use("/profile", require("./routes/routes_profile"));

app.use("/video", require("./routes/routes_video"));

app.use("/favorite", require("./routes/routes_favorite"));

app.use("/ytb", require("./youtube/routes/routes_search"));

app.use("/spotify", require("./spotify/routes/routes_search"));

/* LANCEMENT SERVEUR */
app.listen(port, () => console.log("Server in port " +  port + " is OK !"));
