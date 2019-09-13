const express = require("express");

const Resources = require("./resourcesHelpers");

const router = express.Router();

router.get("/", (request, response) => {
  Resources.getResources()
    .then(resources => {
      response.json(resources);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get resources" });
    });
});

module.exports = router;
