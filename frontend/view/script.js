const userIcon = document.getElementById("userIcon");
const loginModal = document.getElementById("loginModal");
const cadastroModal = document.getElementById("cadastroModal");
const agendamentoModal = document.getElementById("agendamentoModal")

const fecharLogin = document.querySelector("#loginModal .fechar");
const fecharCadastro = document.querySelector("#cadastroModal .fechar");
const fecharAgendamento = document.querySelector("#agendamentoModal .fechar");

const abrirCadastro = document.getElementById("abrirCadastro");

const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");
const formAgendamento = document.getElementById("formAgendamento")

if (userIcon) {
    userIcon.addEventListener("click", () => {

        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (!usuario) {
            loginModal.classList.add("active");
            return;
        }
        const perfilModal = document.getElementById("perfilModal");
        if (perfilModal) {
            perfilModal.classList.add("active");
            document.getElementById("nomeUsuario").textContent = usuario.nome;
            document.getElementById("emailUsuario").textContent = usuario.email;
        }

    });
}

if (fecharLogin && loginModal && formLogin) {
    fecharLogin.addEventListener("click", () => {
        loginModal.classList.remove("active");
        formLogin.reset();
    });
}

if (abrirCadastro && cadastroModal && loginModal) {
    abrirCadastro.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.classList.remove("active");
        cadastroModal.classList.add("active");
    });
}

if (fecharCadastro && cadastroModal && formCadastro) {
    fecharCadastro.addEventListener("click", () => {
        cadastroModal.classList.remove("active");
        formCadastro.reset();
        formLogin.reset();
    });
}

if (fecharAgendamento && agendamentoModal) {

    fecharAgendamento.addEventListener("click", () => {
        agendamentoModal.classList.remove("active");
        formAgendamento.reset();
    })
}

window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove("active");
        formLogin.reset();
    }

    if (e.target === cadastroModal) {
        cadastroModal.classList.remove("active");
        formCadastro.reset();
        formLogin.reset();
    }

    if (e.target === agendamentoModal) {
        agendamentoModal.classList.remove("active");
        formAgendamento.reset();
    }
});

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}


const toggle = document.querySelector(".menu-toggle");

if (toggle) {
    toggle.addEventListener("click", toggleMenu);
}
window.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu");
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});
const menu = document.querySelector(".menu");
if (menu) {
    menu.addEventListener("click", (e) => {
        const menu = document.querySelector(".menu");
        menu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
}

const itensMenu = document.querySelectorAll(".menu ul li");

function animarLinks() {
    itensMenu.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
};

if (toggle){
toggle.addEventListener("click", () => {
    menu.classList.add("active");

    if (menu.classList.contains("active")) {
        animarLinks();
    } else {
        itensMenu.forEach(item => {
            item.style.transitionDelay = "0s";
        });
    }
});
};

const fechar = document.querySelector("#fecharEditar");

if (fechar) {
    fechar.addEventListener("click", function () {
        document.querySelector("#editarModal")
            .classList.remove("active");
    });
}
const fecharPerfil = document.querySelector("#fecharPerfil");
const perfilModal = document.querySelector("#perfilModal");

if (fecharPerfil && perfilModal) {
    fecharPerfil.addEventListener("click", () => {
        perfilModal.classList.remove("active");
    });
}
const btnSair = document.querySelector("#btnSair");

if (btnSair) {
    btnSair.addEventListener("click", () => {

        localStorage.removeItem("usuario");
        localStorage.removeItem("token");

        document.querySelector("#perfilModal")
            .classList.remove("active");
    });
}