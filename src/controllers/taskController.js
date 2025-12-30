const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.user.id
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.id });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, createdBy: req.user.id },
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    createdBy: req.user.id
  });
  res.json({ message: "Task deleted" });
};
