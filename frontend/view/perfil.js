document.addEventListener("DOMContentLoaded", () => {

    const btnUsuario = document.querySelector("#btnUsuario");
    const loginModal = document.querySelector("#cadastroModal"); // seu login
    const perfilModal = document.querySelector("#perfilModal");

    if (!btnUsuario) return;

    btnUsuario.addEventListener("click", () => {

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (usuario && perfilModal) {

            perfilModal.classList.add("active");

            document.querySelector("#nomeUsuario").textContent = usuario.nome;
            document.querySelector("#emailUsuario").textContent = usuario.email;

        } else if (loginModal) {

            loginModal.classList.add("active");

        }

    });

});