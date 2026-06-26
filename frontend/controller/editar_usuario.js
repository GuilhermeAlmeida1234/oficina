let idUsuarioSelecionado = null;

const tabela2 = document.querySelector("#tabela-usuarios");

if (tabela2) {
    tabela2.addEventListener("click", function (event) {

        const linha = event.target.closest("tr");
        if (!linha) return;

        if (event.target.classList.contains("btn-excluir")) return;

        idUsuarioSelecionado = linha.dataset.id;

        document.querySelector("#nomeEditar").value =
            linha.children[1].textContent;

        document.querySelector("#emailEditar").value =
            linha.children[2].textContent;

        document.querySelector("#funcaoEditar").value =
            linha.children[3].textContent;

        document.querySelector("#editarModal")
            .classList.add("active");
    });
}

document.querySelector("#btnSalvarEdicao")
    .addEventListener("click", function () {

        const usuario = {
            nome: document.querySelector("#nomeEditar").value,
            email: document.querySelector("#emailEditar").value,
            funcao: document.querySelector("#funcaoEditar").value
        };

        atualizarUsuario(idUsuarioSelecionado, usuario)
            .then(res => res.json())
            .then(dados => {

                console.log(dados);

                document.querySelector("#editarModal")
                    .classList.remove("active");

                listarUsuarios();

            });

    });
