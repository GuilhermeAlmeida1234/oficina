exports.salvar = (req, res) => {
    model.cadastrarAluno(req.body, (resultado) => {
        res.status(201).json(resultado);
    });
};