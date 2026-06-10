const oficinaRepository = require("../../model/repositories/alunos_repositorio");

exports.cadastrarAluno = (aluno, callback) => {
    oficinaRepository.salvar(aluno, (resultado) => {
        callback(resultado);
    });
};