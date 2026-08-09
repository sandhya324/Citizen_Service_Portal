const express = require("express");
const userRoutes = require("./routes/userRoutes");

const cors = require("cors");
require("dotenv").config();

// Import database connection
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Citizen Service Portal Backend Running");
});

const PORT = 5000;

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// const express = require("express");
// const app = express();

// const PORT = 5000;

// app.get("/", (req, res) => {
//     res.send("Citizen Service Portal Backend Running 🚀");
// });

// app.get("/about", (req, res) => {
//     res.send("Welcome to the Citizen Service Portal Backend!");
// });

// // Contact Route
// app.get("/contact", (req, res) => {
//     res.send("Contact API Working");
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });