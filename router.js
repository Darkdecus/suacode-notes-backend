const router = require("express").Router();

router
  .route("/")
  .get((req, res) => {
    res.json({ msg: "working" });
  })
  .post((req, res) => {
    res.send("working");
  });

router
  .route(":id")
  .get((req, res) => {
    res.send("working");
  })
  .patch((req, res) => {
    res.send("working");
  })
  .delete((req, res) => {
    res.send("working");
  });

module.exports = router;
