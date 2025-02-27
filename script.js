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

// Auto-slide every 6 seconds
setInterval(next, 6000);

// Initialize first slide
showSlide(currentIndex);


// // Typewrite
// class Typewriter {
//     constructor(element, words, period) {
//         this.words = words;
//         this.element = element;
//         this.loopNum = 0;
//         this.period = parseInt(period, 10) || 2000;
//         this.txt = "";
//         this.isDeleting = false;
//         this.tick();
//     }

//     tick() {
//         let i = this.loopNum % this.words.length;
//         let fullTxt = this.words[i];

//         if (this.isDeleting) {
//             this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//             this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         this.element.innerHTML = '<span class="wrap">' + this.txt + "</span>";

//         let delta = 200 - Math.random() * 100;

//         if (this.isDeleting) {
//             delta /= 2;
//         }

//         if (!this.isDeleting && this.txt === fullTxt) {
//             delta = this.period;
//             this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === "") {
//             this.isDeleting = false;
//             this.loopNum++;
//             delta = 500;
//         }

//         setTimeout(() => this.tick(), delta);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     let elements = document.getElementsByClassName("typewrite");
//     for (let i = 0; i < elements.length; i++) {
//         let toRotate = elements[i].getAttribute("data-type");
//         let period = elements[i].getAttribute("data-period");

//         if (toRotate) {
//             new Typewriter(elements[i], JSON.parse(toRotate), period);
//         }
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".products-image img");

    images.forEach((img, index) => {
        // Create wrapper div for the image
        let wrapper = document.createElement("div");
        wrapper.classList.add("product-wrapper");

        // Create button container
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        // Buy Now button
        let buyButton = document.createElement("button");
        buyButton.classList.add("buy-btn");
        buyButton.innerText = "Buy Now";

        // Like button
        let likeButton = document.createElement("button");
        likeButton.classList.add("like-btn");
        likeButton.innerHTML = "🤍"; // Default empty heart

        likeButton.addEventListener("click", function () {
            likeButton.innerHTML = likeButton.innerHTML === "🤍" ? "❤️" : "🤍";
        });

        // Append buttons to container
        buttonContainer.appendChild(buyButton);
        buttonContainer.appendChild(likeButton);

        // Wrap the image inside the wrapper and append buttons
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        wrapper.appendChild(buttonContainer);
    });
});
