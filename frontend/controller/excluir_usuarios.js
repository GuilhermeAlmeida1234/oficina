var tabela = document.querySelector("#tabela-usuarios");

if (tabela) {
    tabela.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        var elementoClicado = event.target;

        if (elementoClicado.classList.contains("btn-excluir")) {

            var linha = elementoClicado.closest("tr");

            var idUsuario = linha.dataset.id;

            fetch(`${API}/${idUsuario}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(dados => {

                    console.log(dados);

                    listarUsuarios();

                })
                .catch(erro => {
                    console.log(erro);
                });

        }

    });
}