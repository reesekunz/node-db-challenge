exports.seed = function(knex) {
  return knex("project_resources").insert([
    {
      project_id: 1,
      resource_id: 1
    }, // id 1 will be generated - Sprint Challenge / Computer

    {
      project_id: 1,
      resource_id: 2
    }, // id 2 - Sprint Challenge / Wifi
    {
      project_id: 2,
      resource_id: 1
    }, // id 3 - PowerPoint Presentation / Computer
    {
      project_id: 2,
      resource_id: 3
    }, // id 4 - PowerPoint Presentation / Microsoft PowerPoint
    {
      project_id: 3,
      resource_id: 4
    }, // id 5 - Write an essay / Paper
    {
      project_id: 3,
      resource_id: 5
    } // id 6 - Write an essay / Pencil
  ]);
};
