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

exports.excluir = (req, res) => {
    const id = parseInt(req.params.id);

    model.excluirUsuario(id, () => {
        res.json({
            mensagem: "Aluno excluído"
        });
    });
};

exports.atualizar = (req, res) => {
    const id = parseInt(req.params.id);

    model.atualizarUsuario(id, req.body, (resultado) => {
        res.json({
            mensagem: "Usuário atualizado"
        });
    });


}