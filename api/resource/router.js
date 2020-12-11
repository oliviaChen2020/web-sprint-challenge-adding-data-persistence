// build your `/api/resources` router here
const express = require('express');
const Model = require('./model');
// const db = require('../../data/dbConfig');

const router = express.Router();
router.get('/', (req, res) => {
  Model.getAllResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to get resources' });
    });
});
module.exports = router;
