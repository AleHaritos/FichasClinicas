
exports.up = function(knex) {
  return knex.schema.createTable('historicos', table => {
      table.integer('idPaciente').references('id')
            .inTable('pacientes').notNull()
      table.string('diaConsulta').notNull()
      table.string('hora').notNull()
      table.integer('idProfissional').references('id')
            .inTable('profissionais')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('historicos')
};
