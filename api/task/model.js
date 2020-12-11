// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
  findById,
  getAllTasks,
  addTask,
};

function findById(id) {
  return db('tasks').where({ id }).first();
}
function getAllTasks() {
  return db('tasks');
}
function addTask(task) {
  return db('tasks').insert(task);
}
