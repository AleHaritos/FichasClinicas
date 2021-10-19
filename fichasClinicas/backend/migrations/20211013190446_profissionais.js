
exports.up = function(knex) {
  return knex.schema.createTable('profissionais', table => {
    table.increments('id').primary()
    table.string('nome', 150).notNull()
    table.string('cpf').unique().notNull()
    table.string('numero').notNull()
    table.string('email').notNull().unique()
    table.string('tipoProfissional').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profissionais')
};
