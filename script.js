// ======================================
// PORTFOLIO SCRIPT
// Author : Yogesh Chandak
// ======================================

// ================================
// PRELOADER
// ================================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.display = "none";

    }

});

// ================================
// TYPING EFFECT
// ================================

const typing = document.getElementById("typing");

if (typing) {

    const words = [

        "Frontend Developer",

        "Angular Developer",

        "Web Developer",

        "Full Stack Learner"

    ];

    let word = 0;
    let letter = 0;
    let remove = false;

    function typingEffect() {

        let current = words[word];

        if (!remove) {

            typing.textContent = current.substring(0, letter + 1);

            letter++;

            if (letter === current.length) {

                remove = true;

                setTimeout(typingEffect, 1500);

                return;

            }

        } else {

            typing.textContent = current.substring(0, letter - 1);

            letter--;

            if (letter === 0) {

                remove = false;

                word++;

                if (word >= words.length) {

                    word = 0;

                }

            }

        }

        setTimeout(typingEffect, remove ? 60 : 120);

    }

    typingEffect();

}

// ================================
// STICKY HEADER
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "#081b29";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,27,41,.95)";

        header.style.boxShadow = "none";

    }

});

// ================================
// MOBILE MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// ACTIVE MENU
// ================================

const sections = document.querySelectorAll("section");

const menuItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    menuItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + current) {

            item.classList.add("active");

        }

    });

});

// ======================================
// SCROLL REVEAL
// ======================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let count = 0;

            const increment = target / 80;

            function updateCounter() {

                count += increment;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ======================================
// SKILL BAR ANIMATION
// ======================================

const skillSection = document.querySelector("#skills");

const bars = document.querySelectorAll(".progress-bar");

let skillAnimated = false;

window.addEventListener("scroll", () => {

    if (!skillSection || skillAnimated) return;

    const top = skillSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        bars.forEach(bar => {

            if (bar.classList.contains("html")) bar.style.width = "95%";

            if (bar.classList.contains("css")) bar.style.width = "90%";

            if (bar.classList.contains("js")) bar.style.width = "80%";

            if (bar.classList.contains("angular")) bar.style.width = "75%";

            if (bar.classList.contains("php")) bar.style.width = "80%";

            if (bar.classList.contains("mysql")) bar.style.width = "80%";

        });

        skillAnimated = true;

    }

});

// ======================================
// BACK TO TOP BUTTON
// ======================================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

// ======================================
// CONTACT FORM
// ======================================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

}

// ======================================
// PROJECT MODAL
// ======================================

const modal = document.getElementById("projectModal");

const modalImagePlaceholder = document.getElementById("modalImagePlaceholder");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalTech = document.querySelector(".modal-tech");

const liveBtn = document.querySelector(".modal-buttons .live-btn");

const githubBtn = document.querySelector(".modal-buttons .github-btn");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".open-modal").forEach(card => {

    card.addEventListener("click", () => {

        if (modalImagePlaceholder) {
            modalImagePlaceholder.innerHTML = `<i class="${card.dataset.icon || "fas fa-code"}"></i>`;
        }

        modalTitle.textContent = card.dataset.title;

        modalDescription.textContent = card.dataset.description;

        modalTech.innerHTML = "";

        card.dataset.tech.split(",").forEach(item => {

            const span = document.createElement("span");

            span.textContent = item.trim();

            modalTech.appendChild(span);

        });

        liveBtn.href = card.dataset.live;

        githubBtn.href = card.dataset.github;

        modal.classList.add("show");

    });

});

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.classList.remove("show");

    });

}

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("show");

    }

});
