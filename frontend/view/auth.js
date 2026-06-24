function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    window.location.href = "base.html";
}

document.addEventListener("DOMContentLoaded", () => {

    const admin = document.getElementById("admin");

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    if (!admin) return;

    if (usuario && usuario.funcao === "administrador") {
        admin.style.display = "flex";
    } else {
        admin.style.display = "none";
    }

});