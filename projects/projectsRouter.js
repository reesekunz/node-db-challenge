const express = require("express");

const Projects = require("./projectsHelpers");

const router = express.Router();

// GET to 6000/api/projects
router.get("/", (request, response) => {
  Projects.getProjects()
    .then(projects => {
      response.json(projects);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get projects" });
    });
});

// GET to 6000/api/projects/2
router.get("/:id", (request, response) => {
  const { id } = request.params;

  Projects.getProjectById(id)
    .then(project => {
      if (project) {
        response.json(project);
      } else {
        response
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get project " });
    });
});
// POST to 6000/api/projects
router.post("/", (request, response) => {
  const projectData = request.body;

  Projects.addProject(projectData)
    .then(project => {
      response.status(201).json(project);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to add new project" });
    });
});

// PUT to 6000/api/projects/3
router.put("/:id", (request, response) => {
  const { id } = request.params;
  const changes = request.body;

  Projects.getProjectById(id)
    .then(project => {
      if (project) {
        Projects.updateProject(changes, id).then(updatedProject => {
          response.json(updatedProject);
        });
      } else {
        response
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to update project" });
    });
});

// DELETE to 6000/api/projects/5

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  Projects.deleteProject(id)
    .then(deletedProject => {
      if (deletedProject) {
        response.json({ removed: deletedProject });
      } else {
        response
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
