"use strict";

/* ==========================================================
   SIENA BEE
   Main JavaScript
   Version 1.0
========================================================== */

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

/*
|--------------------------------------------------------------------------
| DOM Ready
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeSmoothScroll();

    initializeActiveNavigation();

});

/*
|--------------------------------------------------------------------------
| Sticky Navigation
|--------------------------------------------------------------------------
*/

function initializeNavigation() {

    const header = document.querySelector(".site-header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add("is-scrolled");

        } else {

            header.classList.remove("is-scrolled");

        }

    });

}

/*
|--------------------------------------------------------------------------
| Smooth Scroll
|--------------------------------------------------------------------------
*/

function initializeSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}

/*
|--------------------------------------------------------------------------
| Active Navigation
|--------------------------------------------------------------------------
*/

function initializeActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".main-nav a");

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute("id");

            navLinks.forEach((link) => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${id}`) {

                    link.classList.add("active");

                }

            });

        });

    }, {

        threshold: 0.45

    });

    sections.forEach(section => observer.observe(section));

}