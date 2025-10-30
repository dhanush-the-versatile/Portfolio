// ===============================
// AMARA DHANUSH KUMAR PORTFOLIO
// Interactive JavaScript
// ===============================

// Global Variables
let cursorTrail = [];
const maxTrailLength = 20;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 1500);

    // Initialize all components
    initializeNavigation();
    initializeHero();
    initializeAnimations();
    initializeParticles();
    initializeCursorTrail();
    initializeSkills();
    initializeProjects();
    initializeContactForm();
    initializeScrollEffects();
    initializeStats();
}

// Navigation
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Hero Section
function initializeHero() {
    // Typing animation
    const subtitleElement = document.getElementById('typing-subtitle');
    const roles = [
        'CSE Student at LIET',
        'Radio Club President',
        'Full Stack Web Developer',
        'Mobile App Developer',
        'Business Automation Expert',
        'Tech Enthusiast'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeRole() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            subtitleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            subtitleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(typeRole, typingSpeed);
    }

    typeRole();

    // Download resume functionality
    document.getElementById('download-resume').addEventListener('click', (e) => {
        e.preventDefault();
        const resumeData = generateResumeHTML();
        downloadResume(resumeData);
    });
}

// Generate Resume HTML
function generateResumeHTML() {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Amara Dhanush Kumar - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; margin-bottom: 30px; }
        .section { margin-bottom: 25px; }
        .section h2 { color: #22D3EE; border-bottom: 2px solid #22D3EE; padding-bottom: 5px; }
        .contact-info { text-align: center; margin-bottom: 20px; }
        .experience-item, .education-item { margin-bottom: 15px; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-tag { background: #f0f0f0; padding: 5px 10px; border-radius: 15px; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="header">
        <h1>AMARA DHANUSH KUMAR</h1>
        <div class="contact-info">
            <p>Email: amaradhanushkumar@gmail.com | Location: Vizianagaram, Andhra Pradesh</p>
            <p>LinkedIn: linkedin.com/in/amara-dhanush-kumar-319a33308 | GitHub: github.com/dhanush-the-versatile</p>
        </div>
    </div>

    <div class="section">
        <h2>EDUCATION</h2>
        <div class="education-item">
            <strong>Bachelor of Technology - Computer Science and Engineering</strong><br>
            Lendi Institute of Engineering and Technology (2024-2028)
        </div>
        <div class="education-item">
            <strong>Intermediate / 12th Class</strong><br>
            Narayana Junior College
        </div>
    </div>

    <div class="section">
        <h2>EXPERIENCE</h2>
        <div class="experience-item">
            <strong>President - Lendi Radio Club</strong> (Feb 2025 - Current)<br>
            Leading radio club initiatives, organizing events, and fostering community engagement.
        </div>
        <div class="experience-item">
            <strong>Business Owner - Grocery Store</strong> (Ongoing)<br>
            Managing retail business with focus on inventory management and automation.
        </div>
    </div>

    <div class="section">
        <h2>TECHNICAL SKILLS</h2>
        <div class="skills-list">
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">CSS</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">PHP</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">Kotlin</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Android Studio</span>
            <span class="skill-tag">Google Apps Script</span>
            <span class="skill-tag">Docker</span>
        </div>
    </div>

    <div class="section">
        <h2>ACHIEVEMENTS</h2>
        <ul>
            <li>President of Lendi Radio Club</li>
            <li>Mr. Fresher at LIET</li>
            <li>Competition Runner-up</li>
            <li>Business Management Excellence</li>
        </ul>
    </div>

    <div class="section">
        <h2>PROJECTS</h2>
        <ul>
            <li><strong>Tourism & Travel Management Platform:</strong> Full-stack platform with authentication and dashboards</li>
            <li><strong>ETF Management Website:</strong> 8 subpages with payment integration</li>
            <li><strong>Grocery Store Inventory System:</strong> Automated system with WhatsApp integration</li>
            <li><strong>User Safety Website:</strong> PHP/MySQL backend with user authentication</li>
            <li><strong>Mobile Applications:</strong> Android apps using Kotlin and Android Studio</li>
        </ul>
    </div>
</body>
</html>`;
}

// Download Resume
function downloadResume(htmlContent) {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Amara_Dhanush_Kumar_Resume.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

// Animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.glass-card, .timeline-item, .achievement-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Particles System
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';

    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    container.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
            createParticle(container);
        }
    }, 6000 + Math.random() * 3000);
}

// Cursor Trail Effect
function initializeCursorTrail() {
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                width: 6px;
                height: 6px;
                background: linear-gradient(135deg, #22D3EE, #8B5CF6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: trailFade 0.5s ease-out forwards;
            `;

            document.body.appendChild(trail);

            setTimeout(() => {
                trail.remove();
            }, 500);
        });

        if (!document.getElementById('trail-styles')) {
            const style = document.createElement('style');
            style.id = 'trail-styles';
            style.textContent = `
                @keyframes trailFade {
                    0% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Skills Animation
function initializeSkills() {
    const skillBars = document.querySelectorAll('.progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress;
                entry.target.style.width = progress + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Projects Filtering
function initializeProjects() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact Form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        showMessage('Sending message...', 'info');

        try {
            await simulateFormSubmission(data);
            showMessage('Message sent successfully! I will get back to you soon.', 'success');
            form.reset();
        } catch (error) {
            showMessage('Failed to send message. Please try again.', 'error');
        }
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';

        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.name && data.email && data.message) {
                    resolve();
                } else {
                    reject(new Error('Invalid form data'));
                }
            }, 2000);
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Statistics Animation
function initializeStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 50);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance Optimization
function optimizePerformance() {
    const images = document.querySelectorAll('img[src^="https://via.placeholder.com"]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.filter = 'blur(0)';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.filter = 'blur(5px)';
        img.style.transition = 'filter 0.3s ease';
        imageObserver.observe(img);
    });
}

setTimeout(optimizePerformance, 2000);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});
// Console Easter Egg
console.log(`
🚀 Welcome to Amara Dhanush Kumar's Portfolio!

📧 Contact: amaradhanushkumar@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/amara-dhanush-kumar-319a33308
💻 GitHub: https://github.com/dhanush-the-versatile

This portfolio was built with:
- Modern Glassmorphism Design
- Interactive Animations
- Responsive Layout
- Optimized Performance

Made with ❤️ and JavaScript
`);
