const conexao = require("../../database/conexao");

exports.salvar = (usuario, callback) => {
    const sql = "INSERT INTO tbl_usuarios SET ?";

    conexao.query(sql, usuario, (erro, resultado) => {
        if (erro) {
            throw erro;
        }

        callback({
            id: resultado.insertId,
            ...aluno
        });
    });
};