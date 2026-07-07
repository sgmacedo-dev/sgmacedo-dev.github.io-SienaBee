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

    initActiveNavigation();

    initReadingProgress();

    initFadeIn();

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