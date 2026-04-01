document.addEventListener("DOMContentLoaded", function() {

    const carrossel = document.querySelector(".carrossel");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let slides = document.querySelectorAll(".slide");

    // DUPLICA OS SLIDES
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carrossel.appendChild(clone);
    });

    slides = document.querySelectorAll(".slide");

    let index = 0;

    function mover() {
        const largura = slides[0].offsetWidth + 20;
        carrossel.style.transition = "transform 0.5s ease";
        carrossel.style.transform = `translateX(-${index * largura}px)`;
    }

    next.addEventListener("click", () => {
        index++;
        mover();

        // QUANDO CHEGAR NA METADE (fim original)
        if (index >= slides.length / 2) {
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
            const largura = slides[0].offsetWidth + 20;
            carrossel.style.transform = `translateX(-${index * largura}px)`;
        }

        setTimeout(() => {
            index--;
            mover();
        }, 10);
    });

});