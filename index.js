const cors = require("cors");
const express = require("express");
const router = require("./router");
const app = express();

require("dotenv").config();
require("./db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
app.use("/notes", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(5000, () => {
  console.log("running on port 5000...");
});
