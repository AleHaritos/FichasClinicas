
exports.up = function(knex) {
  return knex.schema.createTable('admin', table => {
      table.string('email').primary()
      table.string('senha').notNull()
      table.string('nome').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('admin')
};
