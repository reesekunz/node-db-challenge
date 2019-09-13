const express = require("express");

const Tasks = require("./tasksHelpers");

const router = express.Router();

// GET to 6000/api/tasks
router.get("/", (request, response) => {
  Tasks.getTasks()
    .then(tasks => {
      response.json(tasks);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get tasks" });
    });
});

// GET to 6000/api/tasks/2
router.get("/:id", (request, response) => {
  const { id } = request.params;

  Tasks.getTaskById(id)
    .then(task => {
      if (task) {
        response.json(task);
      } else {
        response
          .status(404)
          .json({ message: "Could not find task with given id." });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get task" });
    });
});

// POST to 6000/api/tasks
router.post("/", (request, response) => {
  const taskData = request.body;

  Tasks.addTask(taskData)
    .then(task => {
      response.status(201).json(task);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to add new task" });
    });
});

// PUT to 6000/api/tasks/3
router.put("/:id", (request, response) => {
  const { id } = request.params;
  const changes = request.body;

  Tasks.getTaskById(id)
    .then(task => {
      if (task) {
        Tasks.updateTask(changes, id).then(updatedTask => {
          response.json(updatedTask);
        });
      } else {
        response
          .status(404)
          .json({ message: "Could not find task with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to update task" });
    });
});

// DELETE to 6000/api/tasks/5

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  Tasks.deleteTask(id)
    .then(deletedTask => {
      if (deletedTask) {
        response.json({ removed: deletedTask });
      } else {
        response
          .status(404)
          .json({ message: "Could not find task with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to delete task" });
    });
});

module.exports = router;
