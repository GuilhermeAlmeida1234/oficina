function listarUsuarios() {

    var tbody = document.querySelector("#tabela-alunos tbody");

    tbody.innerHTML = "";

    obterUsuarios().then(function(obterUsuarios) {

        console.log(obterUsuarios);

        obterUsuarios.forEach(function(aluno) {

            var linha = criaLinhaAluno(aluno);

            tbody.appendChild(linha);
        });
    });

}

