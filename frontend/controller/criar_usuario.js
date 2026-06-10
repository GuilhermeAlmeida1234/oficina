var btnSalvarAluno = document.querySelector("#btnSalvarAluno");

btnSalvarAluno.addEventListener("click", function(event) {
    event.preventDefault();
    var frmAluno = document.querySelector("#frmAluno");
    const aluno = obtemAlunoDoFormulario(frmAluno);

    console.log("ID selecionado:", idAlunoSelecionado);
    console.log("Aluno:", aluno);

    if (idAlunoSelecionado) {

    fetch(`http://localhost:3000/alunos/${idAlunoSelecionado}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
    .then(response => {
        console.log("STATUS PUT:", response.status);
        return response.json();
    })
    .then(dados => {
        console.log(dados);

        frmAluno.reset();
        listarAlunos();

        idAlunoSelecionado = null;
    })
    .catch(erro => {
        console.error("Erro no PUT:", erro);
    });

    console.log("Executando PUT");
    
    } else {

        if (validarFormularioAluno(frmAluno) == false) {
        return;
        }
        var aluno1 = obtemAlunoDoFormulario(frmAluno);
        fetch("http://localhost:3000/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(aluno1)
        })
            .then(response => response.json())
            .then(dados => {
                console.log("Aluno salvo:", dados);
            });

        frmAluno.reset();
        listarAlunos();
        console.log("Executando POST");

    }
});

function obtemAlunoDoFormulario(frmAluno) {
    return {
        nome: frmAluno.nome.value,
        trabalho: parseFloat(frmAluno.trabalho.value),
        prova: parseFloat(frmAluno.prova.value)
    };
}

function validarFormularioAluno(frmAluno) {
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.textContent = "";

    if (frmAluno.nome.value.length == 0) {
        criaMensagem("Nome inválido");
        return false;
    }
    if (validarNotaTrabalho(frmAluno.trabalho.value) == false) {
        criaMensagem("Nota do trabalho inválida.");
        return false;
    }
    if (validarNotaProva(frmAluno.prova.value) == false) {
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

