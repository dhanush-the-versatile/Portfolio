<?php
// Load profile data
$data = require __DIR__ . '/../app/data/profile.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?= $data['name']; ?> | <?= $data['role']; ?></title>

  <!-- SEO -->
  <meta name="description" content="<?= $data['summary']; ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="assets/css/tailwind.css">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
</head>

<body class="bg-slate-950 text-slate-100 font-sans">

<?php include __DIR__ . '/../app/components/navbar.php'; ?>

<!-- ================= HERO ================= -->
<section class="max-w-6xl mx-auto px-6 py-28">
  <h1 class="text-5xl md:text-6xl font-heading font-bold text-gradient-orange">
    <?= $data['name']; ?>
  </h1>

  <p class="mt-4 text-xl text-orange-400">
    <?= $data['role']; ?>
  </p>

  <p class="mt-6 max-w-2xl text-slate-300 leading-relaxed">
    <?= $data['summary']; ?>
  </p>

  <div class="mt-10 flex flex-wrap gap-4">
    <a href="#projects" class="btn-primary">
      View Projects
    </a>

    <a href="mailto:<?= $data['email']; ?>" class="btn-outline">
      Contact Me
    </a>
  </div>
</section>

<!-- ================= SKILLS ================= -->
<section class="max-w-6xl mx-auto px-6 py-20">
  <h2 class="text-3xl font-heading font-bold mb-8">
    Skills
  </h2>

  <div class="flex flex-wrap gap-3">
    <?php foreach ($data['skills'] as $skill): ?>
      <span class="badge"><?= $skill; ?></span>
    <?php endforeach; ?>
  </div>
</section>

<!-- ================= PROJECTS ================= -->
<section id="projects" class="max-w-6xl mx-auto px-6 py-20">
  <h2 class="text-3xl font-heading font-bold mb-10">
    Selected Projects
  </h2>

  <div class="grid md:grid-cols-3 gap-8">
    <?php foreach ($data['projects'] as $project): ?>
      <?php include __DIR__ . '/../app/components/project-card.php'; ?>
    <?php endforeach; ?>
  </div>
</section>

<?php include __DIR__ . '/../app/components/footer.php'; ?>

<!-- JS -->
<script src="assets/js/main.js"></script>

</body>
</html>
