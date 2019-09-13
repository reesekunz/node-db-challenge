exports.seed = function(knex) {
  return knex("projects").insert([
    {
      project_name: "Database Sprint Challenge",
      project_description:
        "Node/Express Week 2 Sprint Challenge for Lambda School",
      completed: 0
    }, // id 1 will be generated
    {
      project_name: "PowerPoint Presentation",
      completed: 1
    }, //id  2
    {
      project_name: "Write an Essay",
      project_description: "English class midterm"
    } //id  3
  ]);
};
