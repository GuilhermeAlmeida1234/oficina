const conexao = require("../../database/conexao");

exports.salvar = (usuario, callback) => {
    const sql = "INSERT INTO tbl_usuario SET ?";
    console.log("repositorio");
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

exports.excluir = (id, callback) => {
    const sql = "DELETE FROM tbl_usuario WHERE id_usuario = ?";

    conexao.query(sql, [id], (erro, resultado) => {
        if (erro) {
            throw erro;
        }

        callback(resultado);
    });
};

exports.editar = (id, usuario, callback)=>{
    const sql = `UPDATE tbl_usuario SET nome = ?, email = ?, funcao = ? WHERE id_usuario = ?`;

    conexao.query(sql,[usuario.nome, usuario.email, usuario.funcao,id], (erro, resultado)=>{
        if(erro){
            console.log(erro);
            return;
        }
        callback(resultado);
    });
}

