document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();
    var frmUsuario = document.querySelector("#formCadastro");
    const usuario = obtemUsuarioDoFormulario(frmUsuario);

    console.log("ID selecionado:", idUsuarioSelecionado);
    console.log("Usuário:", usuario);

    if (idUsuarioSelecionado) {

    fetch(`http://localhost:3000/usuarios/${idUsuarioSelecionado}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        console.log("STATUS PUT:", response.status);
        return response.json();
    })
    .then(dados => {
        console.log(dados);

        frmUsuario.reset();
        listarUsuarios();

        idUsuarioSelecionado = null;
    })
    .catch(erro => {
        console.error("Erro no PUT:", erro);
    });

    console.log("Executando PUT");
    
    } else {

        if (validarFormularioAluno(frmUsuario) == false) {
        return;
        }
        var usuario1 = obtemUsuarioDoFormulario(frmUsuario);
        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario1)
        })
            .then(response => response.json())
            .then(dados => {
                console.log("Usuário salvo:", dados);
            });

        frmUsuario.reset();
        listarUsuarios();
        console.log("Executando POST");

    }
});

function obtemUsuarioDoFormulario(frmUsuario) {
    return {
        nome: frmUsuario.nome.value,
        email: frmUsuario.email.value,
        senha: frmUsuario.senha.value
    };
}

function validarFormularioAluno(frmUsuario) {
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.textContent = "";

    if (frmUsuario.nome.value.length == 0) {
        criaMensagem("Nome inválido");
        return false;
    }
    if (validarNotaTrabalho(frmUsuario.trabalho.value) == false) {
        criaMensagem("Nota do trabalho inválida.");
        return false;
    }
    if (validarNotaProva(frmUsuario.prova.value) == false) {
        criaMensagem("Nota da prova inválida.");
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

