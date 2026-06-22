var btnConsultar = document.querySelector("#btnConsultarUsuario");

function listarUsuarios() {

    var tbody = document.querySelector("#tabela-usuarios tbody");

    tbody.innerHTML = "";

    obterUsuarios().then(function(obterUsuarios) {

        console.log(obterUsuarios);

        obterUsuarios.forEach(function(aluno) {

            var linha = criaLinhaUsuario(aluno);

            tbody.appendChild(linha);
        });
    });

}

btnConsultar.addEventListener("click", function () {
    listarUsuarios();
});