const express = require("express");
const router = express.Router();
const db = require("../models");
const task = require("../models/task");
const { Task } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
// For the backend application, create basic APIs for:

// 1) Getting a single to-do
// 2) Getting multiple to-do’s
// 3) Adding a to-do
// 4) Editing a to-do
// 5) Deleting a to-do

//adding a task
router.post("/new", (req, res) => {
  let { content } = req.body;

  Task.create({ content })
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//getting all tasks
router.get("/", (req, res) => {
  Task.findAll({}).then(tasks => res.json(tasks));
});

//getting a single to-do
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Task.findByPk(id).then((task) => {
    if (!task) {
      return res.sendStatus(404);
    }

    res.json(task);
  });
});

//updates a task - edits
router.put("/:id", (req, res) => {
  const { id } = req.params;
  Task.findByPk(id).then((task) => {
    if (!task) {
      return res.sendStatus(404);
    }

    task.content = req.body.content;
    task.save()
      .then((task) => {
        res.json(task);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

//deleting a task
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Task.findByPk(id).then((task) => {
    if (!task) {
      return res.sendStatus(404);
    }

    task.destroy();
    res.sendStatus(204);
  });
});

//delete all tasks
router.delete("/", (req, res) => {
  Task.destroy({
    truncate: true
  })
  res.sendStatus(204);
});

module.exports = router;

