// ── Mobile nav toggle ──
const toggle = document.getElementById("nav-toggle");
const mobileNav = document.getElementById("nav-mobile");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// ── Active nav link ──
const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a, .nav-mobile a").forEach(link => {
  const linkPath = link.getAttribute("href").split("/").pop();
  if (linkPath === currentPath) link.classList.add("active");
});
