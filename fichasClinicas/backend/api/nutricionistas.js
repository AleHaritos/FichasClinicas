module.exports = app => {

    const { dataValidator } = app.api.validation

    const save = (req, res) => {
        const nutricionista = { ...req.body }

        nutricionista.tipoProfissional = 'nutricionista'
        if(req.params.id) {
            nutricionista.id = req.params.id
        }

        try {
            dataValidator(nutricionista.nome, 'Nome inválido')
            dataValidator(nutricionista.cpf, 'Cpf inválido')
            dataValidator(nutricionista.numero, 'Número inválido')
            dataValidator(nutricionista.email, 'Nome inválido')
        } catch(e) {
            return res.status(400).send(e)
        }

        if(nutricionista.id) {
            app.db('profissionais')
                .update(nutricionista)
                .where({ id: nutricionista.id})
                .then((_) => res.status(204).send())
                .catch((e) => res.status(500).send(e))
        } else {
            app.db('profissionais')
            .insert(nutricionista)
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
        }      
    }

    const get = (req, res) => {
        app.db('profissionais')
            .where({ tipoProfissional: 'nutricionista'})
            .then((nutricionistas) => res.json(nutricionistas))
            .catch((e) => res.status(500).send(e))
    }

    const getById = (req, res) => {
        const id = req.params.id
        if(id) {
        app.db('profissionais')
            .select('nome')
            .where({ id: id,
                    tipoProfissional: 'nutricionista'})
            .first()
            .then((nutricionistas) => res.json(nutricionistas))
            .catch((e) => res.status(500).send(e))
        } else {
            return res.status(400).send()
        }
    }

    return { save, get, getById }
}