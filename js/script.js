/* ==========================================================
   SIENA BEE
   Main JavaScript
   Version 3.0
========================================================== */

"use strict";

/* ==========================================================
   DOM Ready
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();

    initStickyHeader();

    initMobileNav();

    initBackToTop();

    initReadingProgress();

    initFadeIn();

    initActiveNavigation();

    highlightCurrentPage();

    initSchema();

    initAffiliatePlaceholders();

});

/* ==========================================================
   Smooth Scroll
========================================================== */

function initSmoothScroll(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", event => {

            const target = document.querySelector(
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

    const header = document.querySelector(".site-header");

    if(!header) return;

    window.addEventListener("scroll", () => {

        if(window.scrollY > 30){

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

    const button = document.createElement("button");

    button.className = "back-to-top";

    button.setAttribute("aria-label","Back to top");

    button.innerHTML = "↑";

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 500){

            button.classList.add("visible");

        }else{

            button.classList.remove("visible");

        }

    });

    button.addEventListener("click", () => {

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

    const progress = document.querySelector(".reading-progress");

    if(!progress) return;

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            (scrollTop / documentHeight) * 100;

        progress.style.width = percentage + "%";

    });

}

/* ==========================================================
   Fade In Animation
========================================================== */

function initFadeIn(){

    const elements = document.querySelectorAll(

        ".hero-content,\
.section-kicker,\
.editorial-card,\
.essay p,\
.essay h2,\
.essay h3,\
blockquote,\
.house-compass,\
.editor-note"

    );

    if(!elements.length) return;

    elements.forEach(element => {

        element.classList.add("fade-in");

    });

    const observer = new IntersectionObserver((entries)=>{

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

    /* Apenas a Home utiliza destaque por rolagem */

    if(
        window.location.pathname !== "/" &&
        !window.location.pathname.endsWith("index.html")
    ){
        return;
    }

    const sections = document.querySelectorAll("section[id]");

    const links = document.querySelectorAll(".main-nav a");

    if(!sections.length || !links.length) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const id = entry.target.id;

            links.forEach(link=>{

                link.classList.remove("active");

                if(link.getAttribute("href")==="#" + id){

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
   Current Page Highlight
========================================================== */

function highlightCurrentPage(){

    const current = window.location.pathname;

    const links = document.querySelectorAll(".main-nav a");

    links.forEach(link=>{

        const href = link.getAttribute("href");

        if(!href) return;

        if(href.startsWith("#")) return;

        if(
            current.endsWith(href) ||
            current.includes(href)
        ){

            link.classList.add("active");

        }

    });

}

/* ==========================================================
   Future Modules
========================================================== */

const SienaBee = {

    library: null,

    newsletter: null,

    search: null,

    spotify: null,

    amazon: null,

    analytics: null

};

/* ==========================================================
   Utility Functions
========================================================== */

function debounce(callback, delay = 100){

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* ==========================================================
   Window Events
========================================================== */

/* Espaço reservado para futuras otimizações.
   Exemplo:

window.addEventListener(
    "resize",
    debounce(() => {

        // Atualizações futuras

    }, 150)
);

*/

/* ==========================================================
   Siena Bee Signature
========================================================== */

console.log(`

══════════════════════════════════════════════════════

                 SIENA BEE

             AN EDITORIAL HOUSE

══════════════════════════════════════════════════════

Version 3.0

Editorial House loaded successfully.

Pulchritudo · Silentium · Sapientia

Beauty deserves time.
Silence deserves space.
Wisdom deserves careful words.

https://sienabee.com

══════════════════════════════════════════════════════

`);
/* ==========================================================
   Path depth (from script src) — Pages-safe relatives
========================================================== */

function getSiteRootPrefix(){
    const el = document.querySelector('script[src*="js/script.js"]');
    if(!el) return "";
    const src = el.getAttribute("src") || "";
    const match = src.match(/^((?:\.\.\/)*)js\/script\.js/);
    return match ? match[1] : "";
}

const SITE_BASE =
    "https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/";

/* ==========================================================
   Mobile Navigation
========================================================== */

function initMobileNav(){

    const header = document.querySelector(".site-header");
    const nav = document.querySelector(".main-nav");
    const container = document.querySelector(".header-container");

    if(!header || !nav || !container) return;
    if(container.querySelector(".nav-toggle")) return;

    if(!nav.id) nav.id = "primary-nav";
    nav.setAttribute("aria-label", nav.getAttribute("aria-label") || "Primary");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-toggle";
    button.setAttribute("aria-controls", nav.id);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
    button.innerHTML =
        '<span class="nav-toggle-bars" aria-hidden="true">' +
        '<span></span><span></span><span></span></span>';

    container.appendChild(button);

    const closeNav = () => {
        nav.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open menu");
        document.body.classList.remove("nav-open");
    };

    const openNav = () => {
        nav.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close menu");
        document.body.classList.add("nav-open");
    };

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        if(nav.classList.contains("is-open")) closeNav();
        else openNav();
    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "Escape" && nav.classList.contains("is-open")){
            closeNav();
            button.focus();
        }
    });

    document.addEventListener("click", (event) => {
        if(!nav.classList.contains("is-open")) return;
        if(nav.contains(event.target) || button.contains(event.target)) return;
        closeNav();
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => closeNav());
    });

    window.addEventListener("resize", debounce(() => {
        if(window.innerWidth > 900) closeNav();
    }, 150));

}

/* ==========================================================
   JSON-LD Schema (Organization, WebSite, Article, Breadcrumb)
   No SearchAction — site has no real search UI yet.
========================================================== */

function metaContent(selector){
    const el = document.querySelector(selector);
    return el ? (el.getAttribute("content") || "").trim() : "";
}

function injectJsonLd(data){
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
}

function buildBreadcrumbList(canonical){
    try{
        const url = new URL(canonical || window.location.href);
        const parts = url.pathname
            .replace(/\/index\.html$/, "/")
            .replace(/\.html$/, "")
            .split("/")
            .filter(Boolean);

        // Drop GitHub project Pages repo segment from crumbs display root
        const repo = "sgmacedo-dev.github.io-SienaBee";
        const start = parts[0] === repo ? 1 : 0;
        const crumbs = parts.slice(start);
        if(!crumbs.length) return null;

        const items = [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_BASE
        }];

        let path = SITE_BASE;
        crumbs.forEach((segment, index) => {
            const isLast = index === crumbs.length - 1;
            const label = decodeURIComponent(segment)
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());
            if(!isLast){
                path += segment + "/";
            }else if(url.pathname.endsWith(".html")){
                path = canonical || (path + segment + ".html");
            }else{
                path += segment + "/";
            }
            items.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": label,
                "item": isLast ? (canonical || path) : path
            });
        });

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        };
    }catch(_err){
        return null;
    }
}

function initSchema(){

    const canonical =
        document.querySelector('link[rel="canonical"]')?.href ||
        metaContent('meta[property="og:url"]') ||
        window.location.href;

    const title =
        metaContent('meta[property="og:title"]') ||
        document.title.replace(/\s*\|\s*Siena Bee.*$/, "").trim() ||
        document.title;

    const description =
        metaContent('meta[name="description"]') ||
        metaContent('meta[property="og:description"]');

    const ogType = (metaContent('meta[property="og:type"]') || "website").toLowerCase();
    const image =
        metaContent('meta[property="og:image"]') ||
        SITE_BASE + "images/og-cover.jpg";

    injectJsonLd({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Siena Bee",
        "alternateName": "Maison Siena Bee",
        "url": SITE_BASE,
        "logo": SITE_BASE + "images/crest.svg",
        "description":
            "An editorial house devoted to philosophy, silence and slow living.",
        "founder": {
            "@type": "Person",
            "name": "Silvana Macedo"
        },
        "slogan": "Pulchritudo · Silentium · Sapientia"
    });

    // WebSite without SearchAction (no on-site search yet)
    injectJsonLd({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Siena Bee",
        "url": SITE_BASE,
        "description":
            "An editorial house devoted to philosophy, silence and slow living.",
        "publisher": {
            "@type": "Organization",
            "name": "Siena Bee",
            "url": SITE_BASE
        },
        "inLanguage": "en"
    });

    if(ogType === "article"){
        const authorMeta = metaContent('meta[name="author"]');
        const authorName = authorMeta || "Silvana Macedo";
        const article = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "url": canonical,
            "image": image,
            "author": {
                "@type": "Person",
                "name": authorName
            },
            "publisher": {
                "@type": "Organization",
                "name": "Siena Bee",
                "logo": {
                    "@type": "ImageObject",
                    "url": SITE_BASE + "images/crest.svg"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonical
            },
            "isPartOf": {
                "@type": "WebSite",
                "name": "Siena Bee",
                "url": SITE_BASE
            }
        };

        const published = metaContent('meta[property="article:published_time"]');
        const modified = metaContent('meta[property="article:modified_time"]');
        if(published) article.datePublished = published;
        if(modified) article.dateModified = modified;

        injectJsonLd(article);
    }

    const crumbs = buildBreadcrumbList(canonical);
    if(crumbs && crumbs.itemListElement.length > 1){
        injectJsonLd(crumbs);
    }

}

/* ==========================================================
   Amazon Affiliate
   Tag confirmed (Silvana): 4bee-20 (Social Media Associates tag).
   Library/Shop ASINs wired — see docs/AFFILIATE.md. Shop music uses Spotify.
========================================================== */

SienaBee.amazon = {
    associateTag: "4bee-20",
    marketplace: "www.amazon.com",
    disclosurePath: "legal/affiliate-disclosure/"
};

function amazonProductUrl(asin, tag){
    const cleanAsin = (asin || "").trim();
    const cleanTag = (tag || "").trim();
    if(!cleanAsin || cleanAsin === "YOUR_ASIN" || cleanAsin === "pending-asin"){
        return null;
    }
    if(!cleanTag || cleanTag === "YOUR_ASSOCIATE_TAG"){
        return null;
    }
    return (
        "https://" +
        SienaBee.amazon.marketplace +
        "/dp/" +
        encodeURIComponent(cleanAsin) +
        "?tag=" +
        encodeURIComponent(cleanTag)
    );
}

function ensureAffiliateDisclosureNear(cta){
    const card = cta.closest(".editorial-card, .affiliate-card, article");
    const section = cta.closest("section, main") || document.body;
    const host = section;
    if(host.querySelector(".affiliate-disclosure-note")) return;

    const prefix = getSiteRootPrefix();
    const note = document.createElement("p");
    note.className = "affiliate-disclosure-note";
    note.innerHTML =
        'As an Amazon Associate, Siena Bee may earn from qualifying purchases. ' +
        '<a href="' + prefix + SienaBee.amazon.disclosurePath + '">' +
        "Affiliate Disclosure</a>.";

    const firstGrid = host.querySelector(".grid");
    if(firstGrid && firstGrid.parentNode){
        firstGrid.parentNode.insertBefore(note, firstGrid);
    }else if(card && card.parentNode){
        card.parentNode.insertBefore(note, card);
    }else{
        host.insertBefore(note, host.firstChild);
    }
}

function initAffiliatePlaceholders(){

    const nodes = document.querySelectorAll(
        "[data-affiliate-placeholder], [data-asin], a.affiliate-cta"
    );

    if(!nodes.length) return;

    const tag = SienaBee.amazon.associateTag;

    nodes.forEach((el) => {
        if(el.tagName !== "A") return;

        el.classList.add("affiliate-cta");

        const placeholder = (
            el.getAttribute("data-affiliate-placeholder") || ""
        ).trim();
        const asin = (
            el.getAttribute("data-asin") ||
            (placeholder !== "pending-asin" ? placeholder : "") ||
            "YOUR_ASIN"
        ).trim();

        if(!el.getAttribute("data-asin")){
            el.setAttribute("data-asin", asin === "pending-asin" ? "YOUR_ASIN" : asin);
        }

        const url = amazonProductUrl(
            el.getAttribute("data-asin"),
            tag
        );

        ensureAffiliateDisclosureNear(el);

        if(!url){
            el.setAttribute("href", "#");
            el.setAttribute("aria-disabled", "true");
            el.classList.add("is-pending");
            el.setAttribute("title", "Configure ASIN — see docs/AFFILIATE.md");
            if(/view at amazon/i.test(el.textContent.trim())){
                el.textContent = "Configure ASIN";
            }
            el.addEventListener("click", (event) => {
                event.preventDefault();
            });
            return;
        }

        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "nofollow sponsored noopener");
        el.removeAttribute("aria-disabled");
        el.classList.remove("is-pending");
    });

}
