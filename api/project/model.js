// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
  getAllProjects,
  findById,
  getAllTasks,
  getAllResources,
  addProject,
  addTask,
  addResource,
};
function getAllProjects() {
  return db('projects');
}

function findById(id) {
  return db('projects').where({ id }).first();
}
function getAllTasks() {
  return;
}
function getAllResources() {}
function addProject() {}
function addTask() {}
function addResource() {}
