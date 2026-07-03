/* ==========================================================
   SIENA BEE
   script.js
   Version 2.0
========================================================== */

"use strict";

/* ==========================================================
   Helpers
========================================================== */

async function loadJSON(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Unable to load ${path}`);
    }

    return response.json();
}

/* ==========================================================
   Render Featured Essay
========================================================== */

async function renderEssay() {

    const container = document.getElementById("articles-container");

    if (!container) return;

    try {

        const essays = await loadJSON("data/essays.json");

        const essay = essays[0];

        container.innerHTML = `
            <article class="card">

                <div class="card-image"></div>

                <div class="card-content">

                    <div class="card-category">
                        ${essay.category}
                    </div>

                    <h3>${essay.title}</h3>

                    <p>${essay.description}</p>

                    <a href="${essay.url}">
                        Continue Reading →
                    </a>

                </div>

            </article>
        `;

    } catch (error) {

        console.error(error);

    }

}

/* ==========================================================
   Initialize
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderEssay();

});