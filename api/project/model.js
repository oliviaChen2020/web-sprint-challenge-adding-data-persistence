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
  return db('projects')
    .select(
      'projects.project_name',
      'tasks.task_description',
      'tasks.task_completed'
    )
    .join('tasks', 'tasks.project_id', 'projects.project_id')
    .where('projects.project_id', 'projectID');
}
function getAllResources() {}
function addProject() {}
function addTask() {}
function addResource() {}
