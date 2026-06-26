function obterUsuarios() {
    return fetch(`${API}/usuarios`)
        .then(res => res.json());
}

function salvarUsuario(aluno){
    console.log("model");
    return fetch(`${API}/usuarios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
}

