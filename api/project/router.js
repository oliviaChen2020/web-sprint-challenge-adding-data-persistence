// build your `/api/projects` router here
const express = require('express');
const Model = require('./model');
// const db = require('../../data/dbConfig');

const router = express.Router();
router.get('/', (req, res) => {
  Model.getAllProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to get projects' });
    });
});

module.exports = router;
