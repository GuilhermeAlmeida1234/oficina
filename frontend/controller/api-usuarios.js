function obterUsuarios() {
    return fetch("http://localhost:3000/usuarios", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json());
}

function atualizarUsuario(id, usuario) {


    const token = localStorage.getItem("token");


    return fetch(`http://localhost:3000/usuarios/${id}`, {


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