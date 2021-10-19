
exports.up = function(knex) {
    return knex.schema.createTable('pacientesDentista', table => {
        table.string('endereco', 200)
        table.string('diaConsulta')
        table.string('hora')
        table.integer('idDentista').references('id')
            .inTable('profissionais')
        table.boolean('fumante')
        table.integer('idPaciente').references('id')
                .inTable('pacientes').primary()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pacientesDentista')
};
