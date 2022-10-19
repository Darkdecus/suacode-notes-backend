const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

module.exports = mongoose;
