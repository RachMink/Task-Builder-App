const express = require("express");
const router = express.Router();
const db = require("../models");
const { ToDo } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
// For the backend application, create basic APIs for:

// 1) Getting a single to-do
// 2) Getting multiple to-do’s
// 3) Adding a to-do
// 4) Editing a to-do
// 5) Deleting a to-do

//getting all to-dos
router.get("/", (req, res) => {
  ToDo.findAll({}).then((items) => res.json(items));
});

//adding a to-do
router.post("/new", (req, res) => {
  let { title, date, type } = req.body;

  ToDo.create({ title, date, type })
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//getting a single to-do
router.get("/:id", (req, res) => {
  const { id } = req.params;
  ToDo.findByPk(id).then((item) => {
    if (!item) {
      return res.sendStatus(404);
    }

    res.json(item);
  });
});

//updates a to-do
router.put("/:id", (req, res) => {
  const { id } = req.params;
  ToDo.findByPk(id).then((item) => {
    if (!item) {
      return res.sendStatus(404);
    }

    item.content = req.body.content;
    item.save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

//deleting a to-do
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  ToDo.findByPk(id).then((item) => {
    if (!item) {
      return res.sendStatus(404);
    }

    item.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
