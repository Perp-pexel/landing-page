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
// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll(".products-image img");

//     images.forEach((img, index) => {
//         // Create wrapper div for the image
//         let wrapper = document.createElement("div");
//         wrapper.classList.add("product-wrapper");

//         // Create button container
//         let buttonContainer = document.createElement("div");
//         buttonContainer.classList.add("button-container");

//         // Buy Now button
//         let buyButton = document.createElement("button");
//         buyButton.classList.add("buy-btn");
//         buyButton.innerText = "Buy Now";

//         // Like button
//         let likeButton = document.createElement("button");
//         likeButton.classList.add("like-btn");
//         likeButton.innerHTML = "🤍"; // Default empty heart

//         likeButton.addEventListener("click", function () {
//             likeButton.innerHTML = likeButton.innerHTML === "🤍" ? "❤️" : "🤍";
//         });

//         // Append buttons to container
//         buttonContainer.appendChild(buyButton);
//         buttonContainer.appendChild(likeButton);

//         // Wrap the image inside the wrapper and append buttons
//         img.parentNode.insertBefore(wrapper, img);
//         wrapper.appendChild(img);
//         wrapper.appendChild(buttonContainer);
//     });
// });

// collection slider
const carousel = document.getElementById('carousel');
let index = 0;
const totalSlides = Math.ceil(document.querySelectorAll('.collection-item').length / 2); // Two images per slide
let autoSlide = setInterval(nextSlide, 3000); // Auto slide every 3 seconds

function updateSlide() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    clearInterval(autoSlide);
    index = (index + 1) % totalSlides;
    updateSlide();
    autoSlide = setInterval(nextSlide, 3000);
}

function prevSlide() {
    clearInterval(autoSlide);
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
    autoSlide = setInterval(nextSlide, 3000);
}

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
