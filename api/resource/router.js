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

router.post('/', (req, res) => {
  const newResource = req.body;
  Model.addResource(newResource)
    .then(() => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: 'Failed to add new Resource' });
    });
});
module.exports = router;
