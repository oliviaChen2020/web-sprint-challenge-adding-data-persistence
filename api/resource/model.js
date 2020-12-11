// build your `Resource` model here

const db = require('../../data/dbConfig');
module.exports = {
  getAllResources,
  findById,
  addTask,
};

function getAllResources() {
  return db('resources');
}
function findById(id) {
  return db('resources').where({ id }).first();
}
function addTask(resource) {
  return db('resources').insert(resource);
}
