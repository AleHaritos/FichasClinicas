module.exports = app => {
    const { dataValidator } = app.api.validation

    const save = (req, res) => {
        const paciente = { ...req.body }

        if(req.params.id) {
            paciente.id = req.params.id
        }
        try {
            dataValidator(paciente.nome, 'Nome inválido')
            dataValidator(paciente.email, 'Email inválido')
            dataValidator(paciente.cpf, 'Cpf inválido')
            dataValidator(paciente.numero, 'Número inválido')
        }catch(e) {
            res.status(400).send(e)
        }

        if(paciente.id) {
            app.db('pacientes')
             .update(paciente)
             .where({id: paciente.id})
             .then((_) => res.status(204).send())
             .catch((e) => res.status(500).send(e))
        } else {
            app.db('pacientes')
             .insert(paciente)
             .then((_) => res.status(204).send())
             .catch((e) => res.status(500).send(e))
        }
    }

    const getByIdPaciente = (req, res) => {
        if(req.params.id) {
            const id = req.params.id
            app.db('pacientes')
                .where({ id: id,
                        status: true })
                .first()
                .then((paciente) => res.json(paciente))
                .catch((e) => res.status(500).send(e))
        } else {
            return res.status(400).send('Erro ao procurar paciente por Id')
        }
    }

    const getByCpf = (req, res) => {
        const cpf = req.body.cpf
        
        if(cpf) {           
            app.db('pacientes')
                .select('id', 'nome', 'email', 'cpf')
                .where({ cpf: cpf,
                         status: true })
                .first()
                .then((paciente) => res.json(data = [paciente]))
                .catch((e) => res.status(500).send(e))
        } else {
            return res.status(400).send('Erro ao procurar pacientes por cpf')
        }
    }

    const get = (req, res) => {
        app.db('pacientes')
           .where({ status: true })
           .then((pacientes) => res.json(pacientes))
           .catch((e) => res.status(500).send(e))    
}

    const excluir = (req, res) => {

    if(req.params.id) {
        app.db('pacientes')
            .delete()
            .where({ id: req.params.id })
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
    } else {
        return res.status(400).send('Erro ao deletar paciente')
    }
}

const softDelete = (req, res) => {
    if(req.params.id) {
        app.db('pacientes')
            .update({ status: req.body.status })
            .where({ id: req.params.id })
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
    } 
}

const getInativos = (req, res) => {
    if(req.params.id) {
        app.db('pacientes')
        .where({ status: false,
                 id: req.params.id })
        .first()
        .then((inativo) => res.json(inativo))
        .catch((e) => res.status(500).send(e))
    }else {
        app.db('pacientes')
        .where({ status: false })
        .then((inativos) => res.json(inativos))
        .catch((e) => res.status(500).send(e))
    }
   
}

const getInativoByCpf = (req, res) => {
    if(req.body.cpf) {
        app.db('pacientes')
             .where({ cpf: req.body.cpf })
             .first()
             .then((inativo) => res.json(data = [inativo]))
             .catch((e) => res.status(500).send(e))
    }
 }

 return { getInativoByCpf, getInativos, get, softDelete, excluir, getByCpf, getByIdPaciente, save}
}