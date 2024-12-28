const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const loginRoutes = require("./routes/loginroute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

if (!CONNECTION) {
  console.error("Connection string is not provided.");
  process.exit(1);
}

app.get("/", (req, res) => {
  try {
    return res.send("Welcome to the fitness app");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server error");
  }
});

app.use("/login", loginRoutes);

const start = async () => {
  try {
    await mongoose.connect(CONNECTION);

    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error during startup:", error);
    process.exit(1);
  }

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB disconnected through app termination");
    process.exit(0);
  });
};

start();
