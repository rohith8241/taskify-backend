/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks',table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.dateTime('due_date').notNullable();
        table.string('priority').notNullable();
        table.timestamps(true, true);
    
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
