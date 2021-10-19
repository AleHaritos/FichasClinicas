
exports.up = function(knex) {
    return knex.schema.createTable('pacientesPsicologa', table => {
        table.string('diaConsulta')
        table.string('hora')
        table.integer('idPsicologa').references('id')
            .inTable('profissionais')
        table.boolean('remediosControlados')
        table.integer('idPaciente').references('id')
             .inTable('pacientes').primary()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pacientesPsicologa')
};
