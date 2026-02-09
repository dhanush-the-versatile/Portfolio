/**
 * Main JavaScript
 * Portfolio – Amara Dhanush Kumar
 * Clean, minimal, production-ready
 */

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initMobileNav();
  initActiveLinks();
});

/* ===============================
   Smooth Scroll
================================ */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

/* ===============================
   Mobile Navigation Toggle
================================ */
function initMobileNav() {
  const toggleBtn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

/* ===============================
   Active Section Highlight
================================ */
function initActiveLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach(link => {
            link.classList.toggle(
              "text-orange-400",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  sections.forEach(section => observer.observe(section));
}
