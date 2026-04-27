const carrossel = document.querySelector(".carrossel");
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (carrossel && nextBtn && prevBtn) {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carrossel.appendChild(clone);
    });

    slides = document.querySelectorAll(".slide");
    let index1 = 0;
    let intervalo;

    function larguraSlide() {
        return slides[0].offsetWidth + 20;
    }

    function mover() {
        carrossel.style.transition = "transform 0.5s ease";
        carrossel.style.transform = `translateX(-${index1 * larguraSlide()}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index1++;
        mover();

        if (index1 >= slides.length / 2 - 1) {
            setTimeout(() => {
                carrossel.style.transition = "none";
                index1 = 0;
                carrossel.style.transform = `translateX(0px)`;
            }, 500);
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index1 <= 0) {
            carrossel.style.transition = "none";
            index1 = slides.length / 2;
            carrossel.style.transform = `translateX(-${index1 * larguraSlide()}px)`;
        }

        setTimeout(() => {
            index1--;
            mover();
        }, 10);
    });

    function iniciarAutoPlay() {
        clearInterval(intervalo);
        intervalo = setInterval(() => {
            nextBtn.click();
        }, 3000);
    }

    function pararAutoPlay() {
        clearInterval(intervalo);
    }

    if (window.innerWidth <= 768) iniciarAutoPlay();

    carrossel.addEventListener("mouseenter", pararAutoPlay);
    carrossel.addEventListener("mouseleave", iniciarAutoPlay);
}
const menu = document.querySelector(".menu");

document.addEventListener("click", function(event){
    if (menu.classList.contains("active")) {
        pararAutoPlay();
    }
    if (!menu.classList.contains("active")) {
        iniciarAutoPlay();
    }
})
    

const track = document.querySelector('.carrossel2');
const cards = document.querySelectorAll('.card');
let index2 = 0;

function updateCarousel() {
    if (!track || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${index2 * cardWidth}px)`;

    const bg = cards[index2].getAttribute('data-bg');
    document.querySelector('main').style.backgroundImage = `url(${bg})`;
}

if (track && cards.length > 0) {
    updateCarousel();

    const nextBtn2 = document.querySelector('.next');
    const prevBtn2 = document.querySelector('.prev');

    if (nextBtn2 && prevBtn2) {
        nextBtn2.addEventListener('click', () => {
            index2 = (index2 + 1) % cards.length;
            updateCarousel();
        });

        prevBtn2.addEventListener('click', () => {
            index2 = (index2 - 1 + cards.length) % cards.length;
            updateCarousel();
        });
    }
}

const slidesClick = document.querySelectorAll('.slide');
const modalAgendamento = document.getElementById("agendamentoModal");

slidesClick.forEach(slide => {
    slide.addEventListener("click", () => {

        modalAgendamento.classList.add("active");

        const servico = slide.getAttribute("data-servico");
        const select = document.getElementById("servicoAgendamento");

        if (select) {
            select.value = servico;
        };
    });
});