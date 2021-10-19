
exports.up = function(knex) {
  return knex.schema.createTable('pacientes', table => {
    table.increments('id').primary()
    table.string('nome', 150).notNull()
    table.string('email', 150).notNull().unique()
    table.string('cpf').unique().notNull()
    table.string('numero').notNull()
    table.boolean('status').defaultTo(true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pacientes')
};
