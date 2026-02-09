<?php
/**
 * Footer Component
 * Clean, minimal, professional
 */
?>

<footer class="border-t border-slate-800 bg-slate-950">
  <div class="max-w-6xl mx-auto px-6 py-12">

    <!-- Top Section -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      <!-- Name & Tagline -->
      <div>
        <h3 class="text-lg font-heading font-semibold text-gradient-orange">
          <?= htmlspecialchars($data['name']); ?>
        </h3>
        <p class="mt-2 text-slate-400 max-w-md">
          Building production-ready web systems and automation solutions with a focus on clarity, performance, and real-world impact.
        </p>
      </div>

      <!-- Social Links -->
      <div class="flex items-center gap-5">
        <a href="<?= htmlspecialchars($data['socials']['github']); ?>"
           target="_blank"
           rel="noopener noreferrer"
           class="text-slate-400 hover:text-orange-400 transition"
           aria-label="GitHub">
          GitHub
        </a>

        <a href="<?= htmlspecialchars($data['socials']['linkedin']); ?>"
           target="_blank"
           rel="noopener noreferrer"
           class="text-slate-400 hover:text-orange-400 transition"
           aria-label="LinkedIn">
          LinkedIn
        </a>

        <a href="<?= htmlspecialchars($data['socials']['instagram']); ?>"
           target="_blank"
           rel="noopener noreferrer"
           class="text-slate-400 hover:text-orange-400 transition"
           aria-label="Instagram">
          Instagram
        </a>
      </div>
    </div>

    <!-- Divider -->
    <div class="my-8 border-t border-slate-800"></div>

    <!-- Bottom Section -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-500">

      <p>
        © <?= date("Y"); ?> <?= htmlspecialchars($data['name']); ?>. All rights reserved.
      </p>

      <p>
        Built with <span class="text-orange-400">PHP</span> & <span class="text-orange-400">Tailwind CSS</span>
      </p>
    </div>

  </div>
</footer>
