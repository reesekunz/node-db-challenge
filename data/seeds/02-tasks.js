exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      project_id: 1,
      task_description: "Study for Sprint Challenge",
      notes: "Review material from this week",
      completed: "True"
    }, // id 1 will be generated

    {
      project_id: 1,
      task_description: "Work on Sprint Challenge",
      notes: "You have 3 hours to complete it"
    }, // id 2
    {
      project_id: 1,
      task_description: "Submit Sprint Challenge "
    }, // id 3
    {
      project_id: 2,
      task_description: "Prepare PowerPoint",
      completed: "True"
    }, // id 4
    {
      project_id: 2,
      task_description: "Practice Presentation",
      completed: "True"
    }, // id 5
    {
      project_id: 2,
      task_description: "Give Presentation",
      completed: "True"
    }, // id 6
    {
      project_id: 3,
      task_description: "Read book essay is about",
      notes: "Book is titled: Eloquent JavaScript",
      completed: "True"
    }, // id 7
    {
      project_id: 3,
      task_description: "Write essay",
      notes: "In class midterm"
    } // id 8
  ]);
};
