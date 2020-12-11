// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
  getAllProjects,
  findById,
  addProject,
};
function getAllProjects() {
  return db('projects');
}
function findById(id) {
  return db('projects').where({ id }).first();
}
function addProject(project) {
  return db('projects').insert(project);
}
