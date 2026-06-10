const model = require('../model/services/oficina_services');

exports.salvar = (req, res) => {
    model.cadastrarUsuario(req.body, (resultado) => {
        res.status(201).json(resultado);
    });
};

exports.listar = (req, res) => {
    model.listarUsuarios((resultado) => {
        res.json(resultado);
    });
};

exports.login = (req, res) => {
    model.login(req.body, (resultado) => {
        res.json(resultado);
    });
};