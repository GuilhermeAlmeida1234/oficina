document.addEventListener("DOMContentLoaded", ()=>{

    const btnUsuario = document.querySelector("#btnUsuario");
    const perfilModal = document.querySelector("#perfilModal");
    const loginModal = document.querySelector("#loginModal");



    if(btnUsuario){

        btnUsuario.addEventListener("click", ()=>{

            const usuario = JSON.parse(localStorage.getItem("usuario"));


            if(usuario){
                document.querySelector("#nomeUsuario").textContent = usuario.nome;
                document.querySelector("#emailUsuario").textContent = usuario.email;

                perfilModal.classList.add("active");


            }else{
                loginModal.classList.add("active");

            }

        });

    }
    const fecharPerfil = document.querySelector("#fecharPerfil");

    if(fecharPerfil){

        fecharPerfil.addEventListener("click",()=>{
            perfilModal.classList.remove("active");
        });

    }
    const btnSair = document.querySelector("#btnSair");

    if(btnSair){

        btnSair.addEventListener("click",()=>{

            localStorage.removeItem("usuario");
            localStorage.removeItem("token");

            perfilModal.classList.remove("active");

        });

    }

});