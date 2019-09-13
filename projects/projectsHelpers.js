const db = require("../data/db-config");

// using getProjects() helper for GET to / in projects router
function getProjects() {
  return db("projects");
}

module.exports = {
  getProjects
};
