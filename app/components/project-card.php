<?php
/**
 * Project Card Component
 * Displays a single project
 * Expects $project array from profile.php
 */
?>

<div class="card flex flex-col justify-between">

  <!-- Project Header -->
  <div>
    <h3 class="text-xl font-heading font-semibold text-orange-400">
      <?= htmlspecialchars($project['title']); ?>
    </h3>

    <p class="mt-3 text-slate-300 text-sm leading-relaxed">
      <?= htmlspecialchars($project['description']); ?>
    </p>

    <!-- Impact -->
    <?php if (!empty($project['impact'])): ?>
      <p class="mt-3 text-slate-400 text-sm italic">
        <?= htmlspecialchars($project['impact']); ?>
      </p>
    <?php endif; ?>
  </div>

  <!-- Tech Stack -->
  <?php if (!empty($project['tech'])): ?>
    <div class="mt-5 flex flex-wrap gap-2">
      <?php foreach ($project['tech'] as $tech): ?>
        <span class="badge">
          <?= htmlspecialchars($tech); ?>
        </span>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>

  <!-- Action -->
  <?php if (!empty($project['link'])): ?>
    <div class="mt-6">
      <a
        href="<?= htmlspecialchars($project['link']); ?>"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-orange-400 hover:underline"
        aria-label="View project <?= htmlspecialchars($project['title']); ?>"
      >
        View Project
        <span aria-hidden="true">→</span>
      </a>
    </div>
  <?php endif; ?>

</div>
