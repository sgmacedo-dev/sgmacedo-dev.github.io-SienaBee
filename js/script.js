/* ==========================================================
   SIENA BEE
   script.js
   Version 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {

        menuButton.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

            if(menu){

                menu.classList.remove("active");

            }

        });

    });

    /* ==========================================
       NAVBAR EFFECT
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            navbar.classList.add("navbar-scroll");

        }

        else{

            navbar.classList.remove("navbar-scroll");

        }

    });

    /* ==========================================
       REVEAL ANIMATION
    ========================================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll("section").forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("current");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("current");

            }

        });

    });

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backTop=document.createElement("button");

    backTop.innerHTML="↑";

    backTop.className="back-top";

    document.body.appendChild(backTop);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            backTop.classList.add("visible");

        }

        else{

            backTop.classList.remove("visible");

        }

    });

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});

/* ==========================================
   DYNAMIC LIBRARY
========================================== */

fetch("data/library.json")

.then(response => response.json())

.then(items => {

    const containers = {

Books:document.getElementById("books-container"),

Audio:document.getElementById("audio-container"),

Writing:document.getElementById("writing-container"),

Photography:document.getElementById("photo-container")

};

items.forEach(item=>{

const card=document.createElement("article");

card.className="card";

card.innerHTML=`

<img src="${item.image}" alt="${item.title}" loading="lazy">

<h3>${item.title}</h3>

<p>${item.description}</p>

<a href="${item.link}"

target="_blank"

class="button">

${item.button}

</a>

`;

if(containers[item.category]){

containers[item.category].appendChild(card);

}

});

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `

            <img src="${item.image}"

                 alt="${item.title}"

                 loading="lazy">

            <h3>${item.title}</h3>

            <small>${item.category}</small>

            <p>${item.description}</p>

            <a href="${item.link}"

               target="_blank"

               rel="noopener noreferrer"

               class="button">

               ${item.button}

            </a>

        `;

        container.appendChild(card);

    });

});

/* ==========================================
   ARTICLES
========================================== */

fetch("data/articles.json")
.then(response => response.json())
.then(articles => {

    const container = document.getElementById("articles-container");

    if (!container) return;

    articles.forEach(article => {

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <img src="${article.image}" alt="${article.title}" loading="lazy">

            <small>${article.category}</small>

            <h3>${article.title}</h3>

            <p>${article.description}</p>

            <a href="${article.url}" class="button">
                Read Essay
            </a>
        `;

        container.appendChild(card);

    });

});