/*! Siena Bee — cookie consent (Google Consent Mode v2, default: denied) */
(function () {
  "use strict";
  var KEY = "sb_cookie_consent", VER = 1;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", {
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    analytics_storage: "denied", wait_for_update: 500
  });
  function read() {
    try { var d = JSON.parse(localStorage.getItem(KEY) || "null"); return d && d.v === VER ? d : null; }
    catch (e) { return null; }
  }
  function apply(ads) {
    var s = ads ? "granted" : "denied";
    gtag("consent", "update", { ad_storage: s, ad_user_data: s, ad_personalization: s, analytics_storage: s });
  }
  var css = ".sb-cookie{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#fffdf8;color:#2b2622;border-top:1px solid #d9cfc0;box-shadow:0 -4px 18px rgba(0,0,0,.08);font:15px/1.5 Georgia,serif;padding:14px 18px}" +
    ".sb-cookie[hidden]{display:none}.sb-cookie-inner{max-width:960px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}" +
    ".sb-cookie p{margin:0;flex:1 1 360px}.sb-cookie a{color:inherit;text-decoration:underline}.sb-cookie-actions{display:flex;gap:8px;flex-wrap:wrap}" +
    ".sb-cookie button{cursor:pointer;font:inherit;padding:8px 16px;border:1px solid #2b2622;background:#2b2622;color:#fffdf8;border-radius:2px}" +
    ".sb-cookie button.ghost{background:transparent;color:#2b2622}.sb-cookie-prefs{flex:1 1 100%;border-top:1px solid #e7dfd2;padding-top:10px}" +
    ".sb-cookie-prefs label{display:flex;gap:8px;align-items:center;margin:6px 0}";
  function build() {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var el = document.createElement("div");
    el.className = "sb-cookie"; el.id = "sb-cookie-banner"; el.hidden = true;
    el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Cookie preferences");
    el.innerHTML = '<div class="sb-cookie-inner"><p>We use essential cookies and, only if you allow it, advertising cookies from Google AdSense. ' +
      'Read our <a href="/legal/cookie-policy/">Cookie Policy</a> and <a href="/legal/privacy-policy/">Privacy Policy</a>.</p>' +
      '<div class="sb-cookie-actions"><button type="button" data-a="accept">Accept</button>' +
      '<button type="button" class="ghost" data-a="reject">Reject</button>' +
      '<button type="button" class="ghost" data-a="prefs">Preferences</button></div>' +
      '<div class="sb-cookie-prefs" hidden><label><input type="checkbox" checked disabled> Essential (always on)</label>' +
      '<label><input type="checkbox" id="sb-ads"> Advertising (Google AdSense)</label>' +
      '<div class="sb-cookie-actions"><button type="button" data-a="save">Save choices</button></div></div></div>';
    document.body.appendChild(el);
    return el;
  }
  function decide(ads, el) {
    try { localStorage.setItem(KEY, JSON.stringify({ v: VER, date: new Date().toISOString(), advertising: !!ads })); } catch (e) {}
    apply(ads); el.hidden = true;
  }
  function init() {
    var c = read(); if (c) apply(!!c.advertising);
    var el = build(), prefs = el.querySelector(".sb-cookie-prefs"), box = el.querySelector("#sb-ads");
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-a]"); if (!b) return; var a = b.getAttribute("data-a");
      if (a === "accept") decide(true, el); else if (a === "reject") decide(false, el);
      else if (a === "save") decide(box.checked, el); else prefs.hidden = !prefs.hidden;
    });
    if (!c) el.hidden = false;
    var fl = document.querySelectorAll("footer .footer-links");
    fl.forEach(function (p) {
      p.appendChild(document.createTextNode(" · "));
      var a = document.createElement("a"); a.href = "#"; a.textContent = "Cookie settings";
      a.addEventListener("click", function (ev) { ev.preventDefault(); var d = read(); box.checked = !!(d && d.advertising); prefs.hidden = false; el.hidden = false; });
      p.appendChild(a);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
