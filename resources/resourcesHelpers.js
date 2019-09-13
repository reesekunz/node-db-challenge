const db = require("../data/db-config");

// using getResources() helper for GET to / in resources router
function getResources() {
  return db("resources");
}

module.exports = {
  getResources
};
