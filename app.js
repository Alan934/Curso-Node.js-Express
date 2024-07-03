require('dotenv').config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"))

const port = process.env.PORT || 3000;

//routes
app.use("/api",require("./routes"));// cuando se acceda a https://localhost:3001/api/tracks invoca directamente al index.js

app.listen(port, () => {
    console.log(`Funcionando en: ${port}`);
});

dbConnect();

