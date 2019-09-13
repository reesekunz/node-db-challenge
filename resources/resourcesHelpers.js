const db = require("../data/db-config");

// using getResources() helper for GET to / in resources router
function getResources() {
  return db("resources");
}

// using getResourceById() helper for GET to /:id in resources router
function getResourceById(id) {
  return db("resources")
    .first()
    .where({ id: id });
}

// using addResource(resource) helper for POST to / in resources router
function addResource(resource) {
  return db("resources").insert(resource);
}

// using updateResource(changes, id) helper for PUT to /:id in resources router
function updateResource(changes, id) {
  return db("resources")
    .where({ id: id })
    .update(changes);
}

// using deleteResource(id) helper for DELETE to /:id in resources router
function deleteResource(id) {
  return db("resources")
    .where({ id: id })
    .del();
}

module.exports = {
  getResources,
  getResourceById,
  addResource,
  updateResource,
  deleteResource
};
