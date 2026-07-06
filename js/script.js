/* ==========================================================
   SIENA BEE
   Main JavaScript
   Version 2.0
========================================================== */

"use strict";

/* ==========================================================
   INITIALIZATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();

    initStickyHeader();

    initBackToTop();

    initReadingProgress();

    initFadeIn();

    initCurrentPage();

});

/* ==========================================================
   UTILITIES
========================================================== */

function $(selector){

    return document.querySelector(selector);

}

function $$(selector){

    return document.querySelectorAll(selector);

}

function prefersReducedMotion(){

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll(){

    $$('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",(event)=>{

            const href=link.getAttribute("href");

            if(!href || href==="#") return;

            const target=$(href);

            if(!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: prefersReducedMotion()
                    ? "auto"
                    : "smooth",

                block:"start"

            });

        });

    });

}

/* ==========================================================
   STICKY HEADER
========================================================== */

function initStickyHeader(){

    const header=$(".site-header");

    if(!header) return;

    let ticking=false;

    function update(){

        if(window.scrollY>25){

            header.classList.add("is-scrolled");

        }else{

            header.classList.remove("is-scrolled");

        }

        ticking=false;

    }

    window.addEventListener("scroll",()=>{

        if(!ticking){

            window.requestAnimationFrame(update);

            ticking=true;

        }

    });

    update();

}

/* ==========================================================
   READING PROGRESS
========================================================== */

function initReadingProgress(){

    const progress=$(".reading-progress");

    if(!progress) return;

    function updateProgress(){

        const scrollTop=window.scrollY;

        const documentHeight=document.documentElement.scrollHeight-window.innerHeight;

        const percentage=documentHeight>0
            ? (scrollTop/documentHeight)*100
            : 0;

        progress.style.width=`${percentage}%`;

    }

    window.addEventListener("scroll",updateProgress);

    updateProgress();

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop(){

    const button=document.createElement("button");

    button.className="back-to-top";

    button.textContent="↑";

    button.setAttribute("aria-label","Back to top");

    document.body.appendChild(button);

    function updateButton(){

        if(window.scrollY>500){

            button.classList.add("visible");

        }else{

            button.classList.remove("visible");

        }

    }

    window.addEventListener("scroll",updateButton);

    updateButton();

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:prefersReducedMotion()
                ? "auto"
                : "smooth"

        });

    });

}

/* ==========================================================
   FADE IN ON SCROLL
========================================================== */

function initFadeIn(){

    const elements=$$(`
        .editorial-card,
        blockquote,
        .essay h2
    `);

    if(!elements.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(element=>{

        element.classList.add("fade-in");

        observer.observe(element);

    });

}

/* ==========================================================
   CURRENT PAGE
========================================================== */

function initCurrentPage(){

    const currentPath=window.location.pathname
        .replace(/index\.html$/,"")
        .replace(/\/$/,"");

    const links=$$(".main-nav a");

    links.forEach(link=>{

        const href=link.getAttribute("href");

        if(!href || href.startsWith("#")) return;

        const linkPath=new URL(href,window.location.origin)
            .pathname
            .replace(/index\.html$/,"")
            .replace(/\/$/,"");

        if(linkPath===currentPath){

            link.classList.add("active");

        }else{

            link.classList.remove("active");

        }

    });

}

/* ==========================================================
   DEVELOPMENT
========================================================== */

const DEV=false;

if(DEV){

    console.log("🐝 Siena Bee Development Mode");

}

/* ==========================================================
   FUTURE INTEGRATIONS
========================================================== */

/*

Planned modules

✓ Quiet Circle

✓ Search

✓ Library JSON

✓ Spotify playlists

✓ Amazon Affiliates

✓ Contact Form

✓ Newsletter

✓ Reading Statistics

✓ Dark Mode

✓ Language Switcher

*/

/* ==========================================================
   END OF FILE
========================================================== */

