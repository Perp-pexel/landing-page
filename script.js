// humburger
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Slider
let slides = document.querySelectorAll(".hero img");
let heroContent = document.querySelector(".hero-content");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });

    // Reset animation
    heroContent.classList.remove("animate");
    void heroContent.offsetWidth; // Trick to force reflow (restart animation)
    heroContent.classList.add("animate");
}

function next() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(next, 7000);

// Initialize first slide
showSlide(currentIndex);


// Typewrie
class Typewriter {
    constructor(element, words, period) {
        this.words = words;
        this.element = element;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        let i = this.loopNum % this.words.length;
        let fullTxt = this.words[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute("data-type");
        let period = elements[i].getAttribute("data-period");

        if (toRotate) {
            new Typewriter(elements[i], JSON.parse(toRotate), period);
        }
    }
});


