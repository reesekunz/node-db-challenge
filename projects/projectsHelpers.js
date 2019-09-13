const db = require("../data/db-config");

// using getProjects() helper for GET to / in projects router
function getProjects() {
  return db("projects");
}

// using getProjectById() helper for GET to /:id in projects router

function getProjectById(id) {
  return db("projects")
    .first()
    .where({ id: id });
}

// using addProject(project) helper for POST to / in projects router
function addProject(project) {
  return db("projects").insert(project);
}

// using updateProject(changes, id) helper for PUT to /:id in projects router
function updateProject(changes, id) {
  return db("projects")
    .where({ id: id })
    .update(changes);
}

// using deleteProject(id) helper for DELETE to /:id in projects router
function deleteProject(id) {
  return db("projects")
    .where({ id: id })
    .del();
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject
};
