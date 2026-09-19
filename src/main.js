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

const TOPIC_LABELS = {
  "relevant-leadership": "Relevant Leadership",
  differentiation: "Successfully Identifying & Articulating Your Differentiation & Value",
  "times-of-chaos": "Leading, Communicating & Selling in Times of Chaos",
  "move-audiences": "Move Any Audience to Action… Live or Virtually",
  "virtual-professionalism": "Professionalism in the Virtual Environment",
};

if (form) {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("topic");
  if (requested) {
    const label = TOPIC_LABELS[requested] || requested.replace(/[-+]/g, " ");
    const select = form.querySelector("#topic");
    const message = form.querySelector("#message");
    if (select) {
      const match = Array.from(select.options).find(
        (option) => option.value === label || option.value === requested,
      );
      if (match) {
        select.value = match.value;
      } else if (select.querySelector('option[value="Relevant Leadership"]') && label.includes("Relevant Leadership")) {
        select.value = "Relevant Leadership";
      }
    }
    if (message && !message.value) {
      message.value = `I'd like to request this session: ${label}.`;
    }
  }

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

document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

const YOUTUBE_ID_PATTERN = /^[\w-]{11}$/;
const YT_EMBED_PARAMS = new URLSearchParams({
  autoplay: "1",
  modestbranding: "1",
  rel: "0",
  iv_load_policy: "3",
  playsinline: "1",
  disablekb: "1",
  controls: "1",
  fs: "0",
});

function loadYouTubePlayer(frame) {
  if (frame.dataset.loaded === "true") return;
  const id = String(frame.dataset.youtube || "").trim();
  if (!YOUTUBE_ID_PATTERN.test(id)) return;

  frame.dataset.loaded = "true";
  const trigger = frame.querySelector(".video-facade");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${YT_EMBED_PARAMS}`;
  iframe.title =
    frame.dataset.youtubeTitle ||
    trigger?.getAttribute("aria-label") ||
    "Jay McChord Overview Video";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.setAttribute("width", "560");
  iframe.setAttribute("height", "315");
  frame.classList.add("is-playing");
  frame.replaceChildren(iframe);
}

document.querySelectorAll(".video-frame[data-youtube]").forEach((frame) => {
  const trigger = frame.querySelector(".video-facade");
  if (!trigger) return;

  trigger.addEventListener(
    "pointerenter",
    () => {
      const hint = document.createElement("link");
      hint.rel = "preconnect";
      hint.href = "https://www.youtube-nocookie.com";
      hint.crossOrigin = "";
      document.head.appendChild(hint);
    },
    { once: true },
  );

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    loadYouTubePlayer(frame);
  });
});
