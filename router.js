const router = require("express").Router();
const Note = require("./Notes/Note.controller");

router.route("/").get(Note.findAll).post(Note.create);

router.route("/:id").patch(Note.update).delete(Note.delete);

module.exports = router;
