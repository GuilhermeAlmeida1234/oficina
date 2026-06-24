function admin(req, res, next){
    if (req.usuario.funcao !== "administrado"){
        return res.status(403).json({
            erro: "Acesso negado"
        });
    }
    next();
}

module.exports = admin;