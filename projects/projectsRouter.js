const express = require("express");

const Projects = require("./projectsHelpers");

const router = express.Router();

router.get("/", (request, response) => {
  Projects.getProjects()
    .then(projects => {
      response.json(projects);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get projects" });
    });
});

module.exports = router;
