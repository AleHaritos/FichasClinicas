module.exports = app => {

    const { dataValidator } = app.api.validation

    const save = (req, res) => {
        const dentista = { ...req.body }

        dentista.tipoProfissional = 'dentista'

        if(req.params.id) {
            dentista.id = req.params.id
        }

        try {
            dataValidator(dentista.nome, 'Nome inválido')
            dataValidator(dentista.cpf, 'Cpf inválido')
            dataValidator(dentista.numero, 'Número inválido')
            dataValidator(dentista.email, 'Nome inválido')
        } catch(e) {
            return res.status(400).send(e)
        }

        if(dentista.id) {
            app.db('profissionais')
                .update(dentista)
                .where({ id: dentista.id})
                .then((_) => res.status(204).send())
                .catch((e) => res.status(500).send(e))
        } else {
            app.db('profissionais')
            .insert(dentista)
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
        }      
    }

    const get = (req, res) => {
        app.db('profissionais')
            .where({ tipoProfissional: 'dentista'})
            .then((dentistas) => res.json(dentistas))
            .catch((e) => res.status(500).send(e))
    }

    const getById = (req, res) => {
        const id = req.params.id
        if(id) {
        app.db('profissionais')
            .select('nome')
            .where({ id: id,
                    tipoProfissional: 'dentista'})
            .first()
            .then((dentista) => res.json(dentista))
            .catch((e) => res.status(500).send(e))
        } else {
            return res.status(400).send()
        }
    }

    return { save, get, getById }
}