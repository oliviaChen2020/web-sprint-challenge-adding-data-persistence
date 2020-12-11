// build your `/api/tasks` router here
const express = require('express');
const Model = require('./model');
// const db = require('../../data/dbConfig');

const router = express.Router();
router.get('/', (req, res) => {
  Model.getAllTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to get tasks' });
    });
});

router.post('/', (req, res) => {
  const newTask = req.body;
  Model.addResource(newTask)
    .then(() => {
      res.status(201).json(newTask);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: 'Failed to add new task' });
    });
});
module.exports = router;
