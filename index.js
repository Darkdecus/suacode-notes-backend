const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(5000, () => {
  console.log("running on port 5000...");
});
