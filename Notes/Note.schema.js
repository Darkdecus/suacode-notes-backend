const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: String,
    body: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
