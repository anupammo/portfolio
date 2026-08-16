/*!
 * Social Share Widget — reusable across anupammondal.in
 * Usage on any page:
 *   1. Add a container:  <div class="share-article" data-title="Optional custom title"></div>
 *      (falls back to document.title and the current URL if not provided)
 *   2. Include this script once, before </body>:
 *      <script src="/js-tools/socialShareWidget.js" defer></script>
 * Supports multiple containers per page. No dependencies.
 */
(function () {
  "use strict";

  var BRAND = "#6441a5";

  function injectStyles() {
    if (document.getElementById("ssw-styles")) return;
    var css =
      ".ssw{margin:28px 0;font-family:inherit}" +
      ".ssw-label{font-weight:600;font-size:.95rem;margin:0 0 10px;color:inherit;display:flex;align-items:center;gap:8px}" +
      ".ssw-row{display:flex;flex-wrap:wrap;gap:10px}" +
      ".ssw-btn{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;" +
      "font-size:.9rem;font-weight:600;text-decoration:none;border:1px solid rgba(0,0,0,.08);" +
      "color:#fff;cursor:pointer;transition:transform .15s ease,opacity .15s ease;line-height:1}" +
      ".ssw-btn:hover{transform:translateY(-2px);opacity:.92;color:#fff}" +
      ".ssw-btn svg{width:16px;height:16px;fill:currentColor}" +
      ".ssw-x{background:#111}.ssw-li{background:#0a66c2}.ssw-fb{background:#1877f2}" +
      ".ssw-wa{background:#25d366}.ssw-copy{background:" + BRAND + "}" +
      ".ssw-copied{background:#1a7f4b !important}" +
      "@media (max-width:480px){.ssw-btn span{display:none}.ssw-btn{padding:11px 14px}}";
    var s = document.createElement("style");
    s.id = "ssw-styles";
    s.textContent = css;
    document.head.appendChild(s);
  }

  var ICONS = {
    x: '<svg viewBox="0 0 24 24"><path d="M18.9 1.2h3.7l-8 9.1 9.4 12.5h-7.4l-5.8-7.6-6.6 7.6H.5l8.5-9.8L0 1.2h7.6l5.2 6.9zM17.6 20.6h2L6.5 3.3H4.3z"/></svg>',
    li: '<svg viewBox="0 0 24 24"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5zM5.3 7.4A2.1 2.1 0 1 1 5.3 3a2.1 2.1 0 0 1 0 4.4zM7.1 20.4H3.5V9h3.6zM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/></svg>',
    fb: '<svg viewBox="0 0 24 24"><path d="M24 12A12 12 0 1 0 10 23.9v-8.4H7V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.4 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5H14v8.4A12 12 0 0 0 24 12z"/></svg>',
    wa: '<svg viewBox="0 0 24 24"><path d="M.1 24l1.7-6.2A11.9 11.9 0 1 1 12 24a12 12 0 0 1-5.7-1.5zM6.6 20l.4.2a9.9 9.9 0 1 0-3.4-3.6l.2.4-1 3.6zM17.5 14.3c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2c-.2-.3 0-.5.1-.6l.5-.5.3-.5v-.5c0-.1-.7-1.6-.9-2.2s-.5-.5-.7-.5H7c-.2 0-.5.1-.8.4a3.3 3.3 0 0 0-1 2.4 5.7 5.7 0 0 0 1.2 3 13 13 0 0 0 5 4.4c2 .8 2 .5 2.4.5a3 3 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.5-.3z"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11z"/></svg>'
  };

  function track(method) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "share", { method: method, item_id: location.pathname });
    }
  }

  function build(container) {
    var url = container.getAttribute("data-url") || window.location.href;
    var title = container.getAttribute("data-title") || document.title || "";
    var eu = encodeURIComponent(url);
    var et = encodeURIComponent(title);

    var links = [
      { c: "ssw-x", m: "x", label: "X", href: "https://twitter.com/intent/tweet?url=" + eu + "&text=" + et, icon: ICONS.x },
      { c: "ssw-li", m: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/sharing/share-offsite/?url=" + eu, icon: ICONS.li },
      { c: "ssw-fb", m: "facebook", label: "Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=" + eu, icon: ICONS.fb },
      { c: "ssw-wa", m: "whatsapp", label: "WhatsApp", href: "https://wa.me/?text=" + et + "%20" + eu, icon: ICONS.wa }
    ];

    var wrap = document.createElement("div");
    wrap.className = "ssw";

    var label = document.createElement("p");
    label.className = "ssw-label";
    label.innerHTML = '<i class="bi bi-share-fill"></i> Share this article';
    wrap.appendChild(label);

    var row = document.createElement("div");
    row.className = "ssw-row";

    links.forEach(function (l) {
      var a = document.createElement("a");
      a.className = "ssw-btn " + l.c;
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", "Share on " + l.label);
      a.innerHTML = l.icon + "<span>" + l.label + "</span>";
      a.addEventListener("click", function () { track(l.m); });
      row.appendChild(a);
    });

    // Copy link button
    var copy = document.createElement("button");
    copy.type = "button";
    copy.className = "ssw-btn ssw-copy";
    copy.setAttribute("aria-label", "Copy link");
    copy.innerHTML = ICONS.copy + "<span>Copy link</span>";
    copy.addEventListener("click", function () {
      var done = function () {
        var original = copy.innerHTML;
        copy.classList.add("ssw-copied");
        copy.innerHTML = ICONS.copy + "<span>Copied!</span>";
        track("copy_link");
        setTimeout(function () { copy.classList.remove("ssw-copied"); copy.innerHTML = original; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(function () { window.prompt("Copy this link:", url); });
      } else {
        window.prompt("Copy this link:", url);
      }
    });
    row.appendChild(copy);

    wrap.appendChild(row);
    container.innerHTML = "";
    container.appendChild(wrap);
  }

  function init() {
    injectStyles();
    var nodes = document.querySelectorAll(".share-article, #shareArticle");
    Array.prototype.forEach.call(nodes, build);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
