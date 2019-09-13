const db = require("../data/db-config");

// using getTasks() helper for GET to / in tasks router
function getTasks() {
  return db("tasks");
}

// using getTaskById() helper for GET to /:id in tasks router

function getTaskById(id) {
  return db("tasks")
    .first()
    .where({ id: id });
}

// using addTask(task) helper for POST to / in tasks router
function addTask(task) {
  return db("tasks").insert(task);
}

// using updateTask(changes, id) helper for PUT to /:id in tasks router
function updateTask(changes, id) {
  return db("tasks")
    .where({ id: id })
    .update(changes);
}

// using deleteTask(id) helper for DELETE to /:id in tasks router
function deleteTask(id) {
  return db("tasks")
    .where({ id: id })
    .del();
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask
};
