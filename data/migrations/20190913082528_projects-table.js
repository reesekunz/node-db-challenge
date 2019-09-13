exports.up = function(knex) {
  return (
    knex.schema
      // Creating Projects Table
      .createTable("projects", column => {
        column.increments();
        column
          .text("project_name", 255)
          .unique()
          .notNullable();
        column.text("project_description", 500);
        column.boolean("completed");
      })

      // Creating Taks Table
      .createTable("tasks", column => {
        column.increments();
        // Foreign key for project id
        column
          .integer("project_id")
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        column.text("task_description", 500).notNullable;
        column.text("notes", 500);
        column.boolean("completed");
      })

      // Creating Resoures Table
      .createTable("resources", column => {
        column.increments();
        column
          .text("resource_name", 255)
          .unique()
          .notNullable();
        column.text("resource_description", 500);
      })

      // Creating Project_Resources Table
      .createTable("project_resources", column => {
        column.increments();
        // Foreign key for project id
        column
          .integer("project_id")
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        // Foreign key for resource id
        column
          .integer("resource_id")
          .unsigned()
          .references("id")
          .inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
