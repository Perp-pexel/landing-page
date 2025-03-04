function toggleLogo() {
    const overlay = document.getElementById("logo-overlay");

    // Toggle visibility
    if (overlay.classList.contains("hidden")) {
        overlay.classList.remove("hidden");
        overlay.style.display = "flex"; // Show overlay
    } else {
        overlay.classList.add("hidden");
        overlay.style.display = "none"; // Hide overlay
    }
}

// Close overlay when clicking outside the image or the close button
function closeOverlay(event) {
    const overlay = document.getElementById("logo-overlay");
    const enlargedImage = document.getElementById("enlarged-logo");
    const closeButton = document.querySelector(".close-btn");

    // Check if the click is outside the image or on the close button
    if (event.target === overlay || event.target === closeButton) {
        overlay.classList.add("hidden");
        overlay.style.display = "none"; // Hide overlay
    }
}

// Attach event listener to the overlay for closing
document.getElementById("logo-overlay").addEventListener("click", closeOverlay);


// humburger
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.getElementById("navbar");
    const links = document.querySelectorAll(".nav-item a");

    // Toggle menu
    function toggleMenu() {
        navLinks.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggleMenu);

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});


// // Slider
// let slides = document.querySelectorAll(".hero img");
// let heroContent = document.querySelector(".hero-content");
// let currentIndex = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove("active");
//         if (i === index) {
//             slide.classList.add("active");
//         }
//     });

//     // Reset animation
//     heroContent.classList.remove("animate");
//     void heroContent.offsetWidth; // Trick to force reflow (restart animation)
//     heroContent.classList.add("animate");
// }

// function next() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// function prev() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// }

// // Auto-slide every 6 seconds
// setInterval(next, 6000);

// // Initialize first slide
// showSlide(currentIndex);

let slides = document.querySelectorAll(".hero-image img");
let heroContent = document.querySelector(".hero-content");
let dotsContainer = document.querySelector(".dots");
let currentIndex = 0;

// Create dots dynamically
slides.forEach((slide, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
    dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            dots[i].classList.add("active");
        }
    });
    heroContent.classList.remove("animate");
    void heroContent.offsetWidth;
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

setInterval(() => {
    next();
}, 6000);

showSlide(currentIndex);

// collection sliderconst carousel = document.getElementById('carousel');
        const sliders = document.querySelectorAll('.collection-item');
       const totalSlides = Math.ceil(sliders.length); // Ensure all images are included
        let index = 0;
        let autoSlide = setInterval(nextSlide, 3000);

        function updateSlide() {
            const offset = index * (carousel.clientWidth / 2 + 10); // Adjusted for increased gap
            carousel.style.transform = `translateX(-${offset}px)`;
        }

        function nextSlide() {
            clearInterval(autoSlide);
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0;
            }
            updateSlide();
            autoSlide = setInterval(nextSlide, 3000);
        }

        function prevSlide() {
            clearInterval(autoSlide);
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1;
            }
            updateSlide();
            autoSlide = setInterval(nextSlide, 3000);
        }

        document.querySelector('.prev').addEventListener('click', prevSlide);
        document.querySelector('.next').addEventListener('click', nextSlide);

        document.querySelector('.carousel-container').addEventListener('mouseenter', () => clearInterval(autoSlide));
        document.querySelector('.carousel-container').addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 3000));

// likeButton
document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener("click", function () {
            likeButton.innerHTML = likeButton.innerHTML === "🤍" ? "❤️" : "🤍";
        });
    });
});

// blog section
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scrolling Down - Move images apart
        document.querySelector(".image1").style.transform = "translate(-30px, -30px)";
        document.querySelector(".image2").style.transform = "translate(30px, 30px)";
    } else {
        // Scrolling Up - Move images together
        document.querySelector(".image1").style.transform = "translate(-8px, -8px)";
        document.querySelector(".image2").style.transform = "translate(8px, 8px)";
    }

    lastScrollTop = currentScroll;
});

// readmore
// Function to toggle the overlay
function toggleOverlay() {
    const overlay = document.getElementById('readOverlay');
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
}

// Attach event listeners to buttons
document.getElementById('readMoreBtn').addEventListener('click', toggleOverlay);
document.getElementById('closeBtn').addEventListener('click', toggleOverlay);

// Close the overlay when clicking outside the content
window.addEventListener('click', function(event) {
    const overlay = document.getElementById('readOverlay');
    const overlayContent = document.querySelector('.read-content');
    if (event.target === overlay && !overlayContent.contains(event.target)) {
        overlay.style.display = 'none';
    }
});