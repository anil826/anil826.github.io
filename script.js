const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");

toggle?.addEventListener("click", () => {
  const active = root.dataset.theme;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const next = active === "dark" || (active === "auto" && systemDark) ? "light" : "dark";

  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
