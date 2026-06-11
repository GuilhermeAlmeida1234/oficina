function validarUsuario(req, res, next) {

    const { nome, email, senha } = req.body;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            erro: "O nome é obrigatório"
        });
    }

    if (!email || email.trim() === "") {
        return res.status(400).json({
            erro: "O email é obrigatório"
        });
    }

    if (!senha || senha.trim() === "") {
        return res.status(400).json({
            erro: "A senha é obrigatória"
        });
    }

    next();
}

module.exports = validarUsuario;