function criaLinhaUsuario(usuario) {

    var tr = document.createElement("tr");

    tr.classList.add("aluno");

    tr.dataset.id = usuario.id_usuario;


    var tdID = document.createElement("td");
    tdID.textContent = usuario.id_usuario;


    var tdNome = document.createElement("td");
    tdNome.classList.add("td-nome");
    tdNome.textContent = usuario.nome;


    var tdEmail = document.createElement("td");
    tdEmail.classList.add("td-email");
    tdEmail.textContent = usuario.email;


    var tdFuncao = document.createElement("td");
    tdFuncao.classList.add("td-funcao");
    tdFuncao.textContent = usuario.funcao;


    var tdAcoes = document.createElement("td");
    tdAcoes.classList.add("td-acoes");


    var btnEditar = document.createElement("button");
    btnEditar.classList.add("btn-editar");
    btnEditar.textContent = "editar";


    var btnExcluir = document.createElement("button");
    btnExcluir.classList.add("btn-excluir");
    btnExcluir.textContent = "excluir";


    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);


    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdFuncao);
    tr.appendChild(tdAcoes);


    return tr;
}