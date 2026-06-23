const usuarioRepository = require("../../model/repositories/usuario_repositorio");
const bcrypt = require("bcryptjs");

exports.cadastrarUsuario = async (usuario, callback) => {

    try {
        const senhaHash = await bcrypt.hash(usuario.senha, 10);

        usuario.senha = senhaHash;

        usuario.funcao = "usuario";

        usuarioRepository.salvar(usuario, callback);
    }
    catch (erro) {
        console.log(erro)
    }
};

exports.login = (usuario, callback) => {

    usuarioRepository.buscarPorLogin(usuario.email, async (resultado) => {

        if (resultado.length === 0) {

            return callback({
                autenticado: false
            });
        }

        const senhaValida = await bcrypt.compare(
            usuario.senha,
            resultado[0].senha
        );

        if (senhaValida) {

            callback({
                autenticado: true,
                usuario: {
                    id_usuario: resultado[0].id_usuario,
                    nome: resultado[0].nome,
                    email: resultado[0].email,
                    funcao: resultado[0].funcao
                    }
});

        } else {

            callback({
                autenticado: false,
                usuario: null
            });

        }

    });
};

exports.listarUsuarios = (callback) => {
    usuarioRepository.listar((resultado) => {
        callback(resultado);
    });
};
