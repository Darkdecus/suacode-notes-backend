const Note = require("./Note.schema");

exports.findAll = async (req, res) => {
  return res.json(await Note.find());
};

exports.create = async (req, res) => {
  try {
    const { body } = req;
    if (!body.title && !body.body)
      return res.status(400).json({ msg: "missing parameters in body" });
    else if (await Note.find({ title: body.title }))
      return res.status(400).json({ msg: "title must be unique" });
    else return res.status(201).json(await Note.create(body));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "something went wrong" });
  }
};

exports.checkTitle = async (req, res) => {
  return res.json({
    value: !!(await Note.findOne({ title: req.query.title })),
  });
};

exports.update = async (req, res) => {
  return res
    .status(201)
    .json(await Note.findByIdAndUpdate(req.param.id, req.body));
};

exports.delete = async (req, res) => {
  await Note.findByIdAndDelete(req.param.id);
  return res.status(204).json();
};
