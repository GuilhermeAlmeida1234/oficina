function obterUsuarios() {
    return fetch("http://localhost:3000/usuarios")
        .then(res => res.json());
}

function salvarUsuario(aluno){
    console.log("model");
    return fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
}

