
```md
# Amara Dhanush Kumar – Professional Portfolio

A backend-driven, production-oriented personal portfolio built using **PHP** and **Tailwind CSS**, designed to showcase real-world projects, system thinking, and clean frontend architecture.

This portfolio intentionally avoids unnecessary animations and frameworks, focusing instead on **clarity, performance, and maintainability**—the way real engineering teams build products.

---

## 🚀 Tech Stack

- PHP 8+
- Tailwind CSS (custom orange gradient theme)
- Vanilla JavaScript
- HTML5

---

## 🧱 Project Structure

```

portfolio/
│
├── public/
│   ├── index.php
│   ├── assets/
│   │   ├── css/
│   │   │   └── tailwind.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│
├── app/
│   ├── data/
│   │   └── profile.php
│   ├── components/
│   │   ├── navbar.php
│   │   ├── footer.php
│   │   └── project-card.php
│
├── tailwind.config.js
└── README.md

```

---

## 🧠 Architecture Overview

### Data-Driven Content
All personal information, skills, and projects are stored in:

```

app/data/profile.php

```

This file acts as a single source of truth, keeping content separate from UI.

---

### Component-Based PHP
Reusable UI elements such as the navbar, footer, and project cards are stored in:

```

app/components/

````

This avoids duplication and mirrors real-world backend templating practices.

---

### Minimal JavaScript
JavaScript is used only for:
- Smooth scrolling
- Mobile navigation toggle
- Active section highlighting

No frontend frameworks are used to keep the project lightweight and maintainable.

---

### Tailwind CSS Strategy
Tailwind utilities are abstracted into semantic classes like:
- `.btn-primary`
- `.btn-outline`
- `.card`
- `.badge`

This keeps HTML clean and the design system scalable.

---

## 🖥️ Run Locally

### Using PHP Built-in Server
```bash
cd portfolio
php -S localhost:8000 -t public
````

Open:

```
http://localhost:8000
```

---

### Using Any Local Server

You can use XAMPP, WAMP, Laragon, or Apache/Nginx.
Set the document root to the `public/` folder.

---

## ✏️ Customization

* Update content:
  `app/data/profile.php`

* Update styles:
  `public/assets/css/tailwind.css`

* Update JavaScript:
  `public/assets/js/main.js`

---

## 🎯 Design Philosophy

* Performance over flash
* Clarity over clutter
* Real-world relevance over demos
* Maintainable structure over shortcuts

This portfolio reflects how **production-grade systems** are built.

---

## 📄 License

Open for learning and inspiration.

© Amara Dhanush Kumar

```



When you’re ready, say **`navbar.php`** and we’ll finish the UI cleanly.
```
