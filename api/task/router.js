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

module.exports = router;
