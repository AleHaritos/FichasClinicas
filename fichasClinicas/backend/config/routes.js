module.exports = app => {

    //Pacientes
        app.route('/pacientes')
            .post(app.api.pacientes.save)
            .get(app.api.pacientes.get)
    
        app.route('/pacientes/:id')
            .get(app.api.pacientes.getByIdPaciente)
            .put(app.api.pacientes.softDelete)
            .delete(app.api.pacientes.excluir)

        app.route('/pacientes/cpf')
            .post(app.api.pacientes.getByCpf)

        app.route('/inativos')
            .get(app.api.pacientes.getInativos)
            .post(app.api.pacientes.getInativoByCpf)
    
        app.route('/inativos/:id')
            .get(app.api.pacientes.getInativos)
            .put(app.api.pacientes.softDelete)

        //Pacientes Nutricionista
        app.route('/pacientesNutri/:id')
            .put(app.api.pacientesNutricionista.agendarConsulta)
            .post(app.api.pacientesNutricionista.savePacienteNutri)
            .get(app.api.pacientesNutricionista.getByIdPacienteNutri)
            .delete(app.api.pacientesNutricionista.excluirPacienteNutri)
        

    	app.get('/pacientesDetalhes/:id', app.api.pacientesNutricionista.getDetalhes)

        app.route('/pacientesNutri')
            .post(app.api.pacientesNutricionista.getByDatePacientesNutri)
            

        //Nutricionista
         app.route('/nutricionistas')
        .post(app.api.nutricionistas.save)
        .get(app.api.nutricionistas.get)

        app.get('/nutricionistas/:id', app.api.nutricionistas.getById)


        //Pacientes Dentista
        app.route('/pacientesDentista')
            .post(app.api.pacientesDentista.getByDatePacientesDentista)
            

        app.route('/pacientesDentista/:id')
             .put(app.api.pacientesDentista.agendarConsulta)
             .post(app.api.pacientesDentista.savePacienteDentista)
             .get(app.api.pacientesDentista.getByIdPacienteDentista)
             .delete(app.api.pacientesDentista.excluirPacienteDentista)
        
        app.get('/pacientesDetalhesDentista/:id', app.api.pacientesDentista.getDetalhes)

       //Dentista
       
       app.route('/dentistas')
            .post(app.api.dentista.save)
            .get(app.api.dentista.get)

        app.get('/dentistas/:id', app.api.dentista.getById)

        //Psicologas

        app.route('/psicologas')
            .post(app.api.psicologas.save)
            .get(app.api.psicologas.get)

        app.get('/psicologas/:id', app.api.psicologas.getById)

        //Psicologas Pacientes
        app.route('/pacientesPsicologa')
            .post(app.api.pacientesPsicologa.getByDatePacientesPsicologa)
            

        app.route('/pacientesPsicologa/:id')
             .put(app.api.pacientesPsicologa.agendarConsulta)
             .post(app.api.pacientesPsicologa.savePacientePsicologa)
             .get(app.api.pacientesPsicologa.getByIdPacientePsicologa)
             .delete(app.api.pacientesPsicologa.excluirPacientePsicologa)
        
        app.get('/pacientesDetalhesPsicologa/:id', app.api.pacientesPsicologa.getDetalhes)
}           