function obterUsuarios() {
    return fetch(`${API}/usuarios`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json());
}

function atualizarUsuario(id, usuario) {


    const token = localStorage.getItem("token");


    return fetch(`${API}/usuarios/${id}`, {


        method: "PUT",


        headers: {


            "Content-Type": "application/json",

            "Authorization":
                `Bearer ${token}`


        },


        body:
            JSON.stringify(usuario)


    });


}