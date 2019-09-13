exports.seed = function(knex) {
  return knex("resources").insert([
    {
      resource_name: "Computer",
      resource_description: "MacBook Air"
    }, // id 1 will be generated
    {
      resource_name: "Wifi"
    }, // id 2
    {
      resource_name: "Microsoft PowerPoint"
    }, // id 3
    {
      resource_name: "Paper"
    }, // id 4
    {
      resource_name: "Pencil",
      resource_description: "Mechanical"
    } // id 5
  ]);
};
