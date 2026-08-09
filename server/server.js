require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Citizen Service Portal API is running");
});

db.query("SELECT 1")
    .then(() => {
        console.log("MySQL Connected Successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });
