const express = require("express");

const Resources = require("./resourcesHelpers");

const router = express.Router();

// GET to 6000/api/resources
router.get("/", (request, response) => {
  Resources.getResources()
    .then(resources => {
      response.json(resources);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get resources" });
    });
});

// GET to 6000/api/resources/2
router.get("/:id", (request, response) => {
  const { id } = request.params;

  Resources.getResourceById(id)
    .then(resource => {
      if (resource) {
        response.json(resource);
      } else {
        response
          .status(404)
          .json({ message: "Could not find resource with given id." });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get resource " });
    });
});

// POST to 6000/api/resources
router.post("/", (request, response) => {
  const resourceData = request.body;

  Resources.addResource(resourceData)
    .then(resource => {
      response.status(201).json(resource);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to add new resource" });
    });
});

// PUT to 6000/api/resources/3
router.put("/:id", (request, response) => {
  const { id } = request.params;
  const changes = request.body;

  Resources.getResourceById(id)
    .then(resource => {
      if (resource) {
        Resources.updateResource(changes, id).then(updatedResource => {
          response.json(updatedResource);
        });
      } else {
        response
          .status(404)
          .json({ message: "Could not find resource with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to update resource" });
    });
});

// DELETE to 6000/api/resources/5

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  Resources.deleteResource(id)
    .then(deletedResource => {
      if (deletedResource) {
        response.json({ removed: deletedResource });
      } else {
        response
          .status(404)
          .json({ message: "Could not find resource with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to delete resource" });
    });
});

module.exports = router;
