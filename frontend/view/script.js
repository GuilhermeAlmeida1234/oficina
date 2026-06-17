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

if (userIcon && loginModal) {
    userIcon.addEventListener("click", () => {
        loginModal.classList.add("active");
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

if (fecharAgendamento && agendamentoModal){

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

    if (e.target === agendamentoModal){
        agendamentoModal.classList.remove("active");
        formAgendamento.reset();
    }
});

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

const toggle = document.querySelector(".menu-toggle");

window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});
menu.addEventListener("click", (e) => {
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
});

const itensMenu = document.querySelectorAll(".menu ul li");

function animarLinks() {
    itensMenu.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
}

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