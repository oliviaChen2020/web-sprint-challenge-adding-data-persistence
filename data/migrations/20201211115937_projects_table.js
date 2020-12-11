exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (table) => {
      table.increments('project_id');
      table.string('name', 128).notNullable();
      table.string('description', 225).notNullable();
      table.boolean('completed').defaultTo(0);
    })
    .createTable('tasks', (table) => {
      table.increments('task_id');
      table.string('description', 225).notNullable();
      table.string('notes', 225).notNullable();
      table.boolean('completed').defaultTo(0);
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
    .createTable('resources', (table) => {
      table.increments('resource_id');
      table.string('name', 128).notNullable();
      table.string('description', 225).notNullable();
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
