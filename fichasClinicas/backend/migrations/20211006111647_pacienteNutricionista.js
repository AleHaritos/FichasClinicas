
exports.up = function(knex) {
    return knex.schema.createTable('pacientesNutricionista', table => {
        table.string('diaConsulta')
        table.string('hora')
        table.integer('idNutri').references('id')
            .inTable('profissionais')
        table.string('gorduraCorporal')
        table.string('massaMagra')
        table.string('pesoCorporal')
        table.integer('idPaciente').references('id')
            .inTable('pacientes').primary()
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pacientesNutricionista')
};
