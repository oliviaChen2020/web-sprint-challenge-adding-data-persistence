// build your `/api/projects` router here
const express = require('express');
const Model = require('./model');
// const db = require('../../data/dbConfig');

const router = express.Router();
router.get('/', (req, res) => {
  Model.getAllProjects()
    .then((projects) => {
      const convertedProjects = projects.map((project) => ({
        ...project,
        completed: !!project.completed,
      }));
      if (convertedProjects.length > 0) {
        res.status(201).json(convertedProjects);
      } else {
        res.status(404).json({ message: 'Error finding the projects' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Model.findById(id)
    .then((project) => {
      if (project) {
        res.status(201).json(project);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with given id.' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get project' });
    });
});

router.post('/', (req, res) => {
  const newProject = req.body;
  Model.addProject(newProject)
    .then((id) => {
      const convertedProject = {
        ...newProject,
        completed: !!newProject.completed,
      };
      res.status(201).json(convertedProject);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error adding n new project', error });
    });
});

module.exports = router;
