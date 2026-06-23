document.getElementById("formLogin").addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("EmailLogin").value;
    const senha = document.getElementById("SenhaLogin").value;


    fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(dados => {

        console.log("Resposta login:", dados);


        if (dados.autenticado) {

            localStorage.setItem(
                "usuario",
                JSON.stringify(dados.usuario)
            );


            // Esconde administração para usuário comum
            if (dados.usuario.funcao !== "administrador") {

                const admin = document.getElementById("admin");

                if (admin) {
                    admin.style.display = "none";
                }

            }


            if (dados.usuario.funcao === "administrador") {

                window.location.href = "admin.html";

            } else {

                document.getElementById("loginModal").style.display = "none";

                alert("Login realizado!");

            }


        } else {

            alert("Email ou senha incorretos");

        }

    })
    .catch(erro => console.error(erro));

});