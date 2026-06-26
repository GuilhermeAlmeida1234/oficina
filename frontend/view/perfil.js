document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const cadastro = document.querySelector("#cadastroModal");
    const perfil = document.querySelector("#perfilModal");


    if (usuario) {

        document.querySelector("#nomeUsuario").textContent = usuario.nome;
        document.querySelector("#emailUsuario").textContent = usuario.email;
        document.querySelector("#tipoUsuario").textContent = usuario.tipo_usuario;

        perfil.classList.add("active");

        if (cadastro) {
            cadastro.classList.remove("active");
        }

    }

    const btnSair = document.querySelector("#btnSair");

    if (btnSair) {

        btnSair.addEventListener("click", () => {

            localStorage.removeItem("usuario");
            localStorage.removeItem("token");

            location.reload();

        });

    }
});