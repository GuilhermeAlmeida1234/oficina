var btnConsultar = document.querySelector("#btnConsultarUsuario");

function listarUsuarios() {

    var tbody = document.querySelector("#tabela-usuarios tbody");

    tbody.innerHTML = "";

    obterUsuarios().then(function(obterUsuarios) {

        console.log(localStorage.getItem("token"))

        console.log(obterUsuarios);

        if (!Array.isArray(obterUsuarios)){
            console.error("Resposta inválida:", obterUsuarios);
            return;
        }
        obterUsuarios.forEach(function(aluno) {

            var linha = criaLinhaUsuario(aluno);

            tbody.appendChild(linha);
        });
    });

}

window.addEventListener("load", () => {
    listarUsuarios();
})