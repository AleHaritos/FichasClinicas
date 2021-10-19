module.exports = app => {

    const { dataValidator } = app.api.validation

    const save = (req, res) => {
        const psicologa = { ...req.body }

        psicologa.tipoProfissional = 'psicologa'

        if(req.params.id) {
            psicologa.id = req.params.id
        }

        try {
            dataValidator(psicologa.nome, 'Nome inválido')
            dataValidator(psicologa.cpf, 'Cpf inválido')
            dataValidator(psicologa.numero, 'Número inválido')
            dataValidator(psicologa.email, 'Nome inválido')
        } catch(e) {
            return res.status(400).send(e)
        }

        if(psicologa.id) {
            app.db('profissionais')
                .update(psicologa)
                .where({ id: psicologa.id})
                .then((_) => res.status(204).send())
                .catch((e) => res.status(500).send(e))
        } else {
            app.db('profissionais')
            .insert(psicologa)
            .then((_) => res.status(204).send())
            .catch((e) => res.status(500).send(e))
        }      
    }

    const get = (req, res) => {
        app.db('profissionais')
            .where({ tipoProfissional: 'psicologa'})
            .then((psicologa) => res.json(psicologa))
            .catch((e) => res.status(500).send(e))
    }

    const getById = (req, res) => {
        const id = req.params.id
        if(id) {
        app.db('profissionais')
            .select('nome')
            .where({ id: id,
                    tipoProfissional: 'psicologa'})
            .first()
            .then((psicologa) => res.json(psicologa))
            .catch((e) => res.status(500).send(e))
        } else {
            return res.status(400).send()
        }
    }

    return { save, get, getById }
}