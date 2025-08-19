require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express()
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({"msg": "hello"})
});

app.listen(5000, () => console.log(`Server running on port ${5000}`));
