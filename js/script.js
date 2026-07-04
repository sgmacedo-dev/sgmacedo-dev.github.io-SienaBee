/* ==========================================================
   SIENA BEE
   Main JavaScript
   Version 1.0
========================================================== */

"use strict";

/* ==========================================================
   Inicialização
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initStickyHeader();
    initBackToTop();
});

/* ==========================================================
   Rolagem suave
========================================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", (event) => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}

/* ==========================================================
   Cabeçalho Inteligente
========================================================== */

function initStickyHeader() {

    const header = document.querySelector(".site-header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 25) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }

    });

}

/* ==========================================================
   Botão Voltar ao Topo
========================================================== */

function initBackToTop() {

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.className = "back-to-top";

    button.setAttribute("aria-label", "Back to top");

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("visible");

        } else {

            button.classList.remove("visible");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   Observador de Seções
========================================================== */

function initActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const links = document.querySelectorAll(".main-nav a");

    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            links.forEach((link) => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + id) {

                    link.classList.add("active");

                }

            });

        });

    }, {

        threshold: 0.45

    });

    sections.forEach(section => observer.observe(section));

}

/* ==========================================================
   Preparação para futuras integrações
========================================================== */

// Biblioteca (JSON)
// Newsletter
// reCAPTCHA v3
// Pesquisa
// Quiet Circle
// Amazon API
// Spotify Embed

console.log("🐝 Siena Bee carregado com sucesso.");