const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector("#contact-form");

function setScrolled() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

setScrolled();
window.addEventListener("scroll", setScrolled, { passive: true });

function setNav(open) {
  if (!toggle || !nav) return;
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    setNav(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNav(false));
  });

  document.querySelector(".nav-backdrop")?.addEventListener("click", () => {
    setNav(false);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNav(false);
  });
}

const page = document.body.dataset.page;
if (page) {
  document.querySelectorAll(".site-nav a[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) {
      link.setAttribute("aria-current", "page");
    }
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const org = String(data.get("organization") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();
    const status = form.querySelector(".form-status");

    if (!name || !email || !message) {
      if (status) status.textContent = "Please add your name, email, and a short message.";
      return;
    }

    const subject = encodeURIComponent(
      topic ? `McChord Inc. inquiry: ${topic}` : "McChord Inc. website inquiry",
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org || "—"}\nTopic/format: ${topic || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:jay@mcchordinc.com?subject=${subject}&body=${body}`;
    if (status) {
      status.textContent =
        "Opening your email app. If nothing appears, email jay@mcchordinc.com directly.";
    }
  });
}
