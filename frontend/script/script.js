const carrossel = document.querySelector(".carrossel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (carrossel && next && prev) {

    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carrossel.appendChild(clone);
    });

    slides = document.querySelectorAll(".slide");

    let index = 0;
    let intervalo;

    function larguraSlide() {
        return slides[0].offsetWidth + 20;
    }

    function mover() {
        carrossel.style.transition = "transform 0.5s ease";
        carrossel.style.transform = `translateX(-${index * larguraSlide()}px)`;
    }

    next.addEventListener("click", () => {
        index++;
        mover();

        if (index >= slides.length / 2 - 1) {
            setTimeout(() => {
                carrossel.style.transition = "none";
                index = 0;
                carrossel.style.transform = `translateX(0px)`;
            }, 500);
        }
    });

    prev.addEventListener("click", () => {
        if (index <= 0) {
            carrossel.style.transition = "none";
            index = slides.length / 2;
            carrossel.style.transform = `translateX(-${index * larguraSlide()}px)`;
        }

        setTimeout(() => {
            index--;
            mover();
        }, 10);
    });

    function iniciarAutoPlay() {
        clearInterval(intervalo);
        intervalo = setInterval(() => {
            next.click();
        }, 3000);
    }

    function pararAutoPlay() {
        clearInterval(intervalo);
    }

    if (window.innerWidth <= 768) {
        iniciarAutoPlay();
    }

    carrossel.addEventListener("touchstart", pararAutoPlay);
    carrossel.addEventListener("touchend", () => {
        if (window.innerWidth <= 768) iniciarAutoPlay();
    });

    carrossel.addEventListener("mouseenter", pararAutoPlay);
    carrossel.addEventListener("mouseleave", () => {
        if (window.innerWidth <= 768) iniciarAutoPlay();
    });
}

const userIcon = document.getElementById("userIcon");
const loginModal = document.getElementById("loginModal");
const fecharLogin = document.querySelector("#loginModal .fechar");
const formLogin = document.getElementById("formLogin");

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
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove("active");
        formLogin.reset();
    }
});
if (formLogin) {
    formLogin.addEventListener("submit", function(e) {
        e.preventDefault();

        const usuario = formLogin.usuario.value;
        const senha = formLogin.senha.value;

        if (usuario === "admin" && senha === "123") {
            alert("Login realizado!");
            loginModal.classList.remove("active");
        } else {
            alert("Usuário ou senha inválidos");
        }
    });
}
const abrirCadastro = document.getElementById("abrirCadastro");
const cadastroModal = document.getElementById("cadastroModal");
const fecharCadastro = document.querySelector("#cadastroModal .fechar");
const formCadastro = document.getElementById("formCadastro");

if (abrirCadastro && cadastroModal && loginModal) {
    abrirCadastro.addEventListener("click", (e) => {
        e.preventDefault();

        console.log("abrindo cadastro"); // debug

        loginModal.classList.remove("active");
        cadastroModal.classList.add("active");
    });
}
if (fecharCadastro && cadastroModal && formCadastro) {
    fecharCadastro.addEventListener("click", () => {
        cadastroModal.classList.remove("active");
        formCadastro.reset();
    });
}
window.addEventListener("click", (e) => {
    if (e.target === cadastroModal) {
        cadastroModal.classList.remove("active");
        formCadastro.reset();
    }
});

if (formCadastro) {
    formCadastro.addEventListener("submit", (e) => {
        e.preventDefault();

        const senha = formCadastro.senha.value;
        const confirmar = formCadastro.confirmarSenha.value;

        if (senha !== confirmar) {
            alert("As senhas não coincidem!");
            return;
        }

        console.log("Cadastro enviado!");

        cadastroModal.classList.remove("active");
    });
}

const track = document.querySelector('.carrossel2');
const cards = document.querySelectorAll('.card');

let index = 0;

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
    const bg = cards[index].getAttribute('data-bg');
    document.body.style.backgroundImage = `url(${bg})`;
}
updateCarousel();
document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % cards.length;
    updateCarousel();
});
document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
});