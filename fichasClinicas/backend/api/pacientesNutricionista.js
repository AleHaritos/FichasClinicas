module.exports = app => {
    
    const savePacienteNutri = async (req, res) => {
        const paciente = { ...req.body }
       
        paciente.idPaciente = req.params.id
            
           app.db('pacientesNutricionista')
            .insert(paciente)
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
       
    }

    const getByIdPacienteNutri = (req, res) => {
        if(req.params.id) {
            const id = req.params.id
            app.db('pacientesNutricionista')
                .where({ idPaciente: id })
                .first()
                .then((paciente) => res.json(paciente))
                .catch((e) => res.json({}))
        } else {
            return res.status(400).send('Erro ao procurar paciente por Id')
        }
    }

    const getByDatePacientesNutri = (req, res) => {
       const date = req.body.diaConsulta  
        if(date) {
            app.db('pacientesNutricionista as n')
                .join('pacientes as p', 'p.id', 'n.idPaciente')
                .select('p.nome', 'p.id' ,'p.numero', 'n.diaConsulta', 'n.hora')
                .where({ diaConsulta: date })
                .then((pacientes) => res.json(pacientes))
                .catch((e) => res.status(500).send(e))
        } else {
            return res.status(400).send('Erro ao procurar pacientes por Data')
        }
    }


const get = (req, res) => {

         app.db('pacientesNutricionista as n')
            .join('pacientes as p', 'p.id', 'n.idPaciente')
            .select('p.nome', 'p.cpf', 'p.email', 'p.numero', 'n.diaConsulta')
            .where({ status: true })
            .then((pacientes) => res.json(pacientes))
            .catch((e) => res.status(500).send(e))
      
}

const agendarConsulta = (req, res) => {
    if(req.params.id) {
        const id = req.params.id

        const data = { ...req.body }
        app.db('pacientesNutricionista')
            .update(data)
            .where({ idPaciente: id })
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
    } else {
        return res.status(400).send('Os dados inseridos estão inválidos')
    }
}

const excluirPacienteNutri = (req, res) => {

    if(req.params.id) {
        app.db('pacientesNutricionista')
            .delete()
            .where({ idPaciente: req.params.id })
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
    } else {
        return res.status(400).send('Erro ao deletar paciente')
    }
}

const getDetalhes = async (req, res) => {

    const id =  req.params.id

    //Verificacão para ver se o paciente é agendado ou não
    const teste = await app.db('pacientesNutricionista')
                            .where({ idPaciente: id})
                            .first()

    if(teste){                       
    app.db('pacientesNutricionista as n')
       .join('pacientes as p', 'p.id', 'n.idPaciente')
       .select('p.nome', 'p.cpf', 'p.email', 'p.numero', 'n.diaConsulta',
             'n.massaMagra', 'n.pesoCorporal', 'n.gorduraCorporal', 'n.hora', 'n.idNutri')
       .where({ status: true, idPaciente: id })
       .first()
       .then((paciente) => res.json(paciente))
       .catch((e) => res.status(500).send(e))
     }
     else {
         app.db('pacientes')
            .select('nome', 'id', 'cpf', 'email', 'numero')
            .where({id: id})
            .first()
            .then((paciente) => res.json(paciente))
            .catch((e) => res.status(500).send(e))
     }
}

    return { savePacienteNutri, get, agendarConsulta, excluirPacienteNutri, 
            getByIdPacienteNutri, getByDatePacientesNutri, getDetalhes }
}