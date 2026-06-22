function criaLinhaUsuario(usuario) {
        var tr = document.createElement("tr");
        tr.classList.add("aluno");
        tr.dataset.id = usuario.id;
        
        var tdID = document.createElement("td");
        tdID.textContent = usuario.id_usuario;

        var tdNome = document.createElement("td");
        tdNome.classList.add("td-nome");
        tdNome.textContent = usuario.nome;

        var tdEmail = document.createElement("td");
        tdEmail.classList.add("td-trabalho");
        tdEmail.textContent = usuario.email;

        var tdFuncao = document.createElement("td");
        tdFuncao.classList.add("td-funcao");
        tdFuncao.textContent = usuario.funcao;

        tr.appendChild(tdID);
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdFuncao);

        return tr;
    }