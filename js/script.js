/* ==========================================================
   SIENA BEE
   Main JavaScript
   Version 2.0
========================================================== */

"use strict";

/* ==========================================================
   DOM Ready
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();

    initStickyHeader();

    initBackToTop();

    initReadingProgress();

    initFadeIn();

    initActiveNavigation();

    highlightCurrentPage();

});

/* ==========================================================
   Smooth Scroll
========================================================== */

function initSmoothScroll(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click",(event)=>{

            const target=document.querySelector(
                link.getAttribute("href")
            );

            if(!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}

/* ==========================================================
   Sticky Header
========================================================== */

function initStickyHeader(){

    const header=document.querySelector(".site-header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>30){

            header.classList.add("is-scrolled");

        }else{

            header.classList.remove("is-scrolled");

        }

    });

}

/* ==========================================================
   Back To Top
========================================================== */

function initBackToTop(){

    const button=document.createElement("button");

    button.className="back-to-top";

    button.setAttribute("aria-label","Back to top");

    button.innerHTML="↑";

    document.body.appendChild(button);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("visible");

        }else{

            button.classList.remove("visible");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================================
   Reading Progress
========================================================== */

function initReadingProgress(){

    const progress=document.querySelector(".reading-progress");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const scrollTop=window.scrollY;

        const documentHeight=
            document.documentElement.scrollHeight-window.innerHeight;

        const percentage=(scrollTop/documentHeight)*100;

        progress.style.width=percentage+"%";

    });

}

/* ==========================================================
   Fade In
========================================================== */

function initFadeIn(){

    const elements=document.querySelectorAll(

        ".editorial-card, .essay p, .essay h2, .essay h3, blockquote"

    );

    if(!elements.length) return;

    elements.forEach(element=>{

        element.classList.add("fade-in");

    });

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.15,

        rootMargin:"0px 0px -80px 0px"

    });

    elements.forEach(element=>{

        observer.observe(element);

    });

}

/* ==========================================================
   Active Navigation
========================================================== */

function initActiveNavigation(){

    const sections=document.querySelectorAll("section[id]");

    const links=document.querySelectorAll(".main-nav a");

    if(!sections.length || !links.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const id=entry.target.id;

            links.forEach(link=>{

                link.classList.remove("active");

                const href=link.getAttribute("href");

                if(href===`#${id}`){

                    link.classList.add("active");

                }

            });

        });

    },{

        threshold:.45

    });

    sections.forEach(section=>observer.observe(section));

}

/* ==========================================================
   Current Page
========================================================== */

function highlightCurrentPage(){

    const current=window.location.pathname;

    const links=document.querySelectorAll(".main-nav a");

    links.forEach(link=>{

        const href=link.getAttribute("href");

        if(!href) return;

        if(href.startsWith("#")) return;

        if(current.endsWith(href) || current.includes(href)){

            link.classList.add("active");

        }

    });

}

/* ==========================================================
   Future Modules
========================================================== */

const SienaBee={

    library:null,

    newsletter:null,

    search:null,

    spotify:null,

    amazon:null,

    analytics:null

};

/* ==========================================================
   Console Signature
========================================================== */

console.log(`

═══════════════════════════════════════════════

            THE SIENA BEE

        A HOUSE OF THOUGHT

═══════════════════════════════════════════════

Version 2.0

Editorial House loaded successfully.

Sapientia · Veritas · Libertas

═══════════════════════════════════════════════

`);