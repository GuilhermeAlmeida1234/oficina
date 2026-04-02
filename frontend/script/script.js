document.addEventListener("DOMContentLoaded", function() {

    const carrossel = document.querySelector(".carrossel");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carrossel.appendChild(clone);
    });
    function larguraSlide() {
    const estilo = window.getComputedStyle(slides[0]);
    const gap = parseInt(estilo.marginRight) || 20;
    return slides[0].offsetWidth + gap;
    }
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
        if (window.innerWidth <= 768) {
            iniciarAutoPlay();
        }
    });

    carrossel.addEventListener("mouseenter", pararAutoPlay);
    carrossel.addEventListener("mouseleave", () => {
        if (window.innerWidth <= 768) {
            iniciarAutoPlay();
        }
    });

    const userIcon = document.getElementById("userIcon");
    const modal = document.getElementById("loginModal");
    const fechar = document.querySelector(".fechar");
    const form = document.getElementById("loginForm");

    userIcon.addEventListener("click", () => {
        modal.classList.add("active");
    });

    fechar.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const usuario = form.usuario.value;
        const senha = form.senha.value;

        if (usuario === "admin" && senha === "123") {
            alert("Login realizado!");
            modal.classList.remove("active");
        } else {
            alert("Usuário ou senha inválidos");
        }
});
});

