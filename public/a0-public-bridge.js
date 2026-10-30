(() => {
  const routeRevision = "nexah-science-r11-20261029";
  const publicHref = (href) => {
    const url = new URL(href, location.origin);
    url.searchParams.set("rev", routeRevision);
    return `${url.pathname}${url.search}${url.hash}`;
  };
  const path = window.location.pathname;
  const current = path.includes("01_FROM_LINE_TO_READOUT")
    ? "read"
    : path.includes("A0_TOURS") || path.includes("NEXAH_C_CONNECT")
      ? "use"
      : path === "/" || path.endsWith("/index.html")
        ? "orient"
        : "research";

  document.body.classList.add("a0-public-composed", `a0-public-route--${current}`);

  document.querySelectorAll("a[data-public-href]").forEach((link) => {
    link.setAttribute("href", publicHref(link.dataset.publicHref));
  });

  const links = [
    ["orient", "Orientieren", publicHref("/")],
    ["research", "Forschen", publicHref("/forschen/")],
    ["read", "Lesen & erkunden", publicHref("/library/")],
    ["use", "Anwenden & erleben", publicHref("/A0_TOURS.html")],
  ];

  const primary = links.map(([key, label, href]) =>
    `<a href="${href}"${current === key ? ' aria-current="page"' : ""}>${label}</a>`
  ).join("");

  const shell = document.createElement("header");
  shell.className = "a0-public-bridge";
  shell.innerHTML = `
    <div class="a0-public-bridge__top">
      <a class="a0-public-bridge__brand" href="${publicHref("/")}">NEXAH <span>· Orientation</span></a>
      <nav class="a0-public-bridge__primary" aria-label="NEXAH Hauptnavigation">${primary}</nav>
      <details class="a0-public-bridge__menu">
        <summary>Navigation <span aria-hidden="true">+</span></summary>
        <div class="a0-public-bridge__panel">
          <header><p>NEXAH · öffentliche Übersicht</p><h2>Wohin möchten Sie gehen?</h2></header>
          <nav aria-label="Vollständige NEXAH Navigation">
            <a href="${publicHref("/")}"><small>01</small><strong>Orientieren</strong><span>Start · About · Arbeitsweise</span></a>
            <a href="${publicHref("/forschen/")}"><small>02</small><strong>Forschen</strong><span>Stand · Ergebnisse · Mathfield · Review</span></a>
            <a href="${publicHref("/library/")}"><small>03</small><strong>Lesen & erkunden</strong><span>Library · Buch · Atlas</span></a>
            <a href="${publicHref("/A0_TOURS.html")}"><small>04</small><strong>Anwenden & erleben</strong><span>Tour · Laboratory · öffentliche Häuser</span></a>
          </nav>
        </div>
      </details>
    </div>`;
  const skip = document.createElement("a");
  skip.className = "a0-public-bridge-skip";
  skip.href = "#a0-public-content";
  skip.textContent = "Zum Inhalt";
  document.body.prepend(shell);
  document.body.prepend(skip);

  const notifyOwnerFrame = () => {
    if (window.parent === window) return;
    window.parent.postMessage({
      type: "nexah:owner-route",
      path: `${location.pathname}${location.search}${location.hash}`,
    }, "*");
  };
  addEventListener("pageshow", notifyOwnerFrame);
  addEventListener("hashchange", notifyOwnerFrame);
  notifyOwnerFrame();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const menu = shell.querySelector("details");
      if (menu) menu.open = false;
    }
  });
})();
