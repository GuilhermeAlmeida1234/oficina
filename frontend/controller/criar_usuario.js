document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();
    var frmUsuario = document.querySelector("#formCadastro");
    const usuario = obtemUsuarioDoFormulario(frmUsuario);

        if (validarFormularioUsuario(frmUsuario) == false) {
            console.log("erro");
            return;
        }
        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then(response => response.json())
            .then(dados => {
                console.log("Usuário salvo:", dados);
            });

        frmUsuario.reset();
});

function obtemUsuarioDoFormulario(frmUsuario) {
    return {
        nome: frmUsuario.nome.value,
        email: frmUsuario.email.value,
        senha: frmUsuario.senha.value
    };
}

function validarFormularioUsuario(frmUsuario) {

    if (frmUsuario.nome.value.trim() === "") {
        criaMensagem("Nome inválido");
        return false;
    }
    if (frmUsuario.email.value.trim() === "") {
        criaMensagem("Email inválido");
        return false;
    }
    if (frmUsuario.senha.value.trim() === "") {
        criaMensagem("Senha inválida");
        return false;
    }
    return true;
}

function criaMensagem(texto) {
    var msg = document.createElement("div");
    msg.classList.add("alert", "alert-warning");
    msg.textContent = texto;

    document.querySelector("#divMensagens").appendChild(msg);
}

