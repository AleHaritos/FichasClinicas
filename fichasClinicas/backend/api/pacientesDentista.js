module.exports = app => {

    const savePacienteDentista = async (req, res) => {
        const paciente = { ...req.body }
       
        paciente.idPaciente = req.params.id
            
           app.db('pacientesDentista')
            .insert(paciente)
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
       
    }

    const getByIdPacienteDentista = (req, res) => {
        if(req.params.id) {
            const id = req.params.id
            app.db('pacientesDentista')
                .where({ idPaciente: id })
                .first()
                .then((paciente) => res.json(paciente))
                .catch((e) => res.json({}))
        } else {
            return res.status(400).send('Erro ao procurar paciente por Id')
        }
    }

    const getByDatePacientesDentista = (req, res) => {
       const date = req.body.diaConsulta  
        if(date) {
            app.db('pacientesDentista as d')
                .join('pacientes as p', 'p.id', 'd.idPaciente')
                .select('p.nome', 'p.id' ,'p.numero', 'd.diaConsulta', 'd.hora')
                .where({ diaConsulta: date })
                .then((pacientes) => res.json(pacientes))
                .catch((e) => res.status(500).send(e))
        } else {
            return res.status(400).send('Erro ao procurar pacientes por Data')
        }
    }


const get = (req, res) => {

         app.db('pacientesDentista as d')
            .join('pacientes as p', 'p.id', 'd.idPaciente')
            .select('p.nome', 'p.cpf', 'p.email', 'p.numero', 'd.diaConsulta')
            .where({ status: true })
            .then((pacientes) => res.json(pacientes))
            .catch((e) => res.status(500).send(e))
      
}

const agendarConsulta = (req, res) => {
    if(req.params.id) {
        const id = req.params.id

        const data = { ...req.body }
        app.db('pacientesDentista')
            .update(data)
            .where({ idPaciente: id })
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
    } else {
        return res.status(400).send('Os dados inseridos estão inválidos')
    }
}

const excluirPacienteDentista = (req, res) => {

    if(req.params.id) {
        app.db('pacientesDentista')
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
    const teste = await app.db('pacientesDentista')
                            .where({ idPaciente: id})
                            .first()

    if(teste){                       
    app.db('pacientesDentista as d')
       .join('pacientes as p', 'p.id', 'd.idPaciente')
       .select('p.nome', 'p.cpf', 'p.email', 'p.numero', 'd.diaConsulta',
             'd.endereco', 'd.fumante', 'd.hora', 'd.idDentista')
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

return { savePacienteDentista, getDetalhes, excluirPacienteDentista, agendarConsulta, getByDatePacientesDentista,
          getByIdPacienteDentista, get}
}