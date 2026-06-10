const conexao = require("../../database/conexao");

exports.salvar = (usuario, callback) => {
    const sql = "INSERT INTO tbl_usuario SET ?";

    conexao.query(sql, usuario, (erro, resultado) => {

        if (erro) {
            throw erro;
        }

        callback({
            id: resultado.insertId,
            ...usuario
        });
    });
};

exports.buscarPorLogin = (email, callback) => {

    const sql = `
        SELECT *
        FROM tbl_usuario
        WHERE email = ?
    `;

    conexao.query(sql, [email], (erro, resultado) => {

        if (erro){
            throw erro;
        }
        callback(resultado)
        }
    );
};

exports.listar = (callback) => {
    const sql = "SELECT * FROM tbl_usuario";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            throw erro;
        }

        callback(resultado);
    });
};
