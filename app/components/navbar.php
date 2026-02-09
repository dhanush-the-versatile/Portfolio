<?php
/**
 * Navbar Component
 * Responsive, accessible, production-ready
 */
?>

<nav class="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    <!-- Logo / Name -->
    <a href="#top" class="text-lg font-heading font-bold text-gradient-orange">
      Amara Dhanush Kumar
    </a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="mailto:<?= htmlspecialchars($data['email']); ?>" class="nav-link">
        Contact
      </a>
    </div>

    <!-- Mobile Toggle Button -->
    <button
      id="nav-toggle"
      class="md:hidden text-slate-200 hover:text-orange-400 transition"
      aria-label="Toggle navigation"
      aria-expanded="false"
    >
      <!-- Hamburger Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
           class="h-6 w-6"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div
    id="nav-menu"
    class="hidden md:hidden border-t border-slate-800 bg-slate-950"
  >
    <div class="px-6 py-4 flex flex-col gap-4">
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="mailto:<?= htmlspecialchars($data['email']); ?>" class="nav-link">
        Contact
      </a>
    </div>
  </div>
</nav>

<!-- Spacer (prevents content hiding under fixed navbar) -->
<div class="h-20"></div>
