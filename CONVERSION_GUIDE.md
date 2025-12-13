# XixaSoft React to PHP/HTML Conversion Guide

This guide helps you convert the React/Tailwind CSS project to a plain PHP/HTML/CSS/JavaScript structure.

## Project Structure Mapping

### React Structure → PHP/HTML Structure

```
React Project                    PHP/HTML Project
├── src/                        ├── 
│   ├── assets/                 │   ├── assets/
│   │   ├── logo_white.png     │   │   ├── logo_white.png
│   │   ├── hero-ecommerce.jpg │   │   ├── hero-ecommerce.jpg
│   │   ├── hero-marketing.jpg │   │   ├── hero-marketing.jpg
│   │   └── hero-development.jpg│   │   └── hero-development.jpg
│   ├── components/             │   ├── includes/
│   │   ├── layout/             │   │   ├── header.php
│   │   │   ├── Header.tsx     │   │   ├── footer.php
│   │   │   ├── Footer.tsx     │   │   └── head.php
│   │   │   └── Layout.tsx     │   │
│   │   └── home/               │   │
│   │       ├── HeroSlider.tsx │   │
│   │       ├── Services.tsx   │   │
│   │       ├── About.tsx      │   │
│   │       ├── Stats.tsx      │   │
│   │       ├── Process.tsx    │   │
│   │       └── CTA.tsx        │   │
│   └── pages/                  │   ├── index.php
│       ├── Index.tsx          │   ├── about.php
│       ├── AboutPage.tsx      │   ├── services.php
│       ├── ServicesPage.tsx   │   ├── team.php
│       ├── TeamPage.tsx       │   ├── portfolio.php
│       ├── PortfolioPage.tsx  │   ├── contact.php
│       ├── ContactPage.tsx    │   ├── services/
│       ├── services/           │   │   ├── jtl-shopware.php
│       │   ├── JTLShopwarePage│   │   ├── jtl-wawi.php
│       │   ├── JTLWawiPage    │   │   ├── google-ads.php
│       │   ├── GoogleAdsPage  │   │   └── laravel.php
│       │   └── LaravelPage    │   └── legal/
│       └── legal/              │       ├── privacy-policy.php
│           ├── PrivacyPolicy  │       ├── terms-of-service.php
│           ├── TermsOfService │       ├── imprint.php
│           └── CookiePolicy   │       └── cookie-policy.php
├── src/index.css              ├── css/
│                              │   ├── styles.css
│                              │   └── animations.css
└── tailwind.config.ts         └── js/
                                   ├── main.js
                                   └── slider.js
```

---

## Step-by-Step Conversion

### 1. Create PHP Include Files

#### includes/head.php
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'XixaSoft - The Best IT Solutions'; ?></title>
    <meta name="description" content="<?php echo $pageDescription ?? 'XixaSoft provides JTL Shop, Shopware development, Google Ads management, and Laravel custom applications.'; ?>">
    
    <!-- Tailwind CSS CDN (or Bootstrap) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- OR use Bootstrap -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/animations.css">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="min-h-screen bg-background text-foreground">
```

#### includes/header.php
```php
<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <nav class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <!-- Logo -->
            <a href="/" class="flex items-center gap-2">
                <img src="/assets/logo_white.png" alt="XixaSoft Logo" class="h-12 w-auto" id="logo">
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center gap-1">
                <a href="/" class="nav-link px-4 py-2 text-sm font-medium rounded-lg">Home</a>
                <a href="/about.php" class="nav-link px-4 py-2 text-sm font-medium rounded-lg">About</a>
                
                <!-- Services Dropdown -->
                <div class="relative group">
                    <a href="/services.php" class="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg">
                        Services
                        <i data-lucide="chevron-down" class="h-4 w-4"></i>
                    </a>
                    <div class="dropdown-menu absolute top-full left-0 mt-1 w-56 rounded-lg bg-card shadow-xl border border-border overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <a href="/services/jtl-shopware.php" class="block px-4 py-3 text-sm hover:bg-muted">JTL Shop & Shopware</a>
                        <a href="/services/jtl-wawi.php" class="block px-4 py-3 text-sm hover:bg-muted">JTL Wawi Management</a>
                        <a href="/services/google-ads.php" class="block px-4 py-3 text-sm hover:bg-muted">Google Ads & Merchant</a>
                        <a href="/services/laravel.php" class="block px-4 py-3 text-sm hover:bg-muted">Laravel Development</a>
                    </div>
                </div>
                
                <a href="/team.php" class="nav-link px-4 py-2 text-sm font-medium rounded-lg">Team</a>
                <a href="/portfolio.php" class="nav-link px-4 py-2 text-sm font-medium rounded-lg">Portfolio</a>
                <a href="/contact.php" class="nav-link px-4 py-2 text-sm font-medium rounded-lg">Contact</a>
            </div>

            <!-- CTA Button -->
            <div class="hidden lg:block">
                <a href="/contact.php" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Get Started
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg">
                <i data-lucide="menu" class="h-6 w-6" id="menu-icon"></i>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="lg:hidden hidden py-4 border-t border-border bg-card rounded-b-lg">
            <a href="/" class="block px-4 py-3 hover:bg-muted rounded-lg">Home</a>
            <a href="/about.php" class="block px-4 py-3 hover:bg-muted rounded-lg">About</a>
            <a href="/services.php" class="block px-4 py-3 hover:bg-muted rounded-lg">Services</a>
            <div class="pl-4">
                <a href="/services/jtl-shopware.php" class="block px-4 py-2 text-sm text-muted-foreground">JTL Shop & Shopware</a>
                <a href="/services/jtl-wawi.php" class="block px-4 py-2 text-sm text-muted-foreground">JTL Wawi Management</a>
                <a href="/services/google-ads.php" class="block px-4 py-2 text-sm text-muted-foreground">Google Ads & Merchant</a>
                <a href="/services/laravel.php" class="block px-4 py-2 text-sm text-muted-foreground">Laravel Development</a>
            </div>
            <a href="/team.php" class="block px-4 py-3 hover:bg-muted rounded-lg">Team</a>
            <a href="/portfolio.php" class="block px-4 py-3 hover:bg-muted rounded-lg">Portfolio</a>
            <a href="/contact.php" class="block px-4 py-3 hover:bg-muted rounded-lg">Contact</a>
            <div class="px-4 pt-4">
                <a href="/contact.php" class="block w-full text-center py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white font-medium rounded-lg">
                    Get Started
                </a>
            </div>
        </div>
    </nav>
</header>
```

#### includes/footer.php
```php
<footer class="bg-gradient-to-br from-slate-900 via-slate-900 to-primary/30 text-white">
    <div class="container mx-auto px-4 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <!-- Company Info -->
            <div class="space-y-6">
                <img src="/assets/logo_white.png" alt="XixaSoft" class="h-12 w-auto">
                <p class="text-white/70 text-sm leading-relaxed">
                    XixaSoft is your trusted partner for e-commerce solutions, Google Ads management, 
                    and custom web application development.
                </p>
                <div class="flex gap-4">
                    <a href="https://facebook.com" target="_blank" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                        <i data-lucide="facebook" class="h-5 w-5"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                        <i data-lucide="linkedin" class="h-5 w-5"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                        <i data-lucide="twitter" class="h-5 w-5"></i>
                    </a>
                </div>
            </div>

            <!-- Services -->
            <div>
                <h3 class="font-semibold text-lg mb-6">Our Services</h3>
                <ul class="space-y-3">
                    <li><a href="/services/jtl-shopware.php" class="text-white/70 hover:text-white text-sm">JTL Shop & Shopware</a></li>
                    <li><a href="/services/jtl-wawi.php" class="text-white/70 hover:text-white text-sm">JTL Wawi Management</a></li>
                    <li><a href="/services/google-ads.php" class="text-white/70 hover:text-white text-sm">Google Ads & Merchant</a></li>
                    <li><a href="/services/laravel.php" class="text-white/70 hover:text-white text-sm">Laravel Development</a></li>
                </ul>
            </div>

            <!-- Company & Legal -->
            <div>
                <h3 class="font-semibold text-lg mb-6">Company</h3>
                <ul class="space-y-3">
                    <li><a href="/about.php" class="text-white/70 hover:text-white text-sm">About Us</a></li>
                    <li><a href="/portfolio.php" class="text-white/70 hover:text-white text-sm">Portfolio</a></li>
                    <li><a href="/contact.php" class="text-white/70 hover:text-white text-sm">Contact</a></li>
                </ul>
                <h3 class="font-semibold text-lg mt-8 mb-6">Legal</h3>
                <ul class="space-y-3">
                    <li><a href="/legal/privacy-policy.php" class="text-white/70 hover:text-white text-sm">Privacy Policy</a></li>
                    <li><a href="/legal/terms-of-service.php" class="text-white/70 hover:text-white text-sm">Terms of Service</a></li>
                    <li><a href="/legal/imprint.php" class="text-white/70 hover:text-white text-sm">Imprint</a></li>
                    <li><a href="/legal/cookie-policy.php" class="text-white/70 hover:text-white text-sm">Cookie Policy</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="font-semibold text-lg mb-6">Contact Us</h3>
                <ul class="space-y-4">
                    <li class="flex items-start gap-3">
                        <i data-lucide="mail" class="h-5 w-5 mt-0.5 text-cyan-400"></i>
                        <a href="mailto:admin@xixasoft.com" class="text-white/70 hover:text-white text-sm">admin@xixasoft.com</a>
                    </li>
                    <li class="flex items-start gap-3">
                        <i data-lucide="phone" class="h-5 w-5 mt-0.5 text-cyan-400"></i>
                        <a href="tel:+923485949959" class="text-white/70 hover:text-white text-sm">+92-348-594-9959</a>
                    </li>
                    <li class="flex items-start gap-3">
                        <i data-lucide="map-pin" class="h-5 w-5 mt-0.5 text-cyan-400"></i>
                        <span class="text-white/70 text-sm">Pakistan</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-white/20">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-white/60 text-sm">© <?php echo date('Y'); ?> XixaSoft. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="/legal/privacy-policy.php" class="text-white/60 hover:text-white text-sm">Privacy</a>
                    <a href="/legal/terms-of-service.php" class="text-white/60 hover:text-white text-sm">Terms</a>
                    <a href="/legal/cookie-policy.php" class="text-white/60 hover:text-white text-sm">Cookies</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<script src="/js/main.js"></script>
</body>
</html>
```

---

### 2. CSS Files

#### css/styles.css
```css
/* Design System Variables */
:root {
  --background: 222 47% 11%;
  --foreground: 213 31% 91%;
  --card: 217 33% 17%;
  --card-foreground: 213 31% 91%;
  --primary: 262 83% 58%;
  --primary-foreground: 210 40% 98%;
  --secondary: 199 89% 48%;
  --secondary-foreground: 210 40% 98%;
  --accent: 172 66% 50%;
  --accent-foreground: 222 47% 11%;
  --muted: 217 33% 17%;
  --muted-foreground: 215 20% 65%;
  --border: 217 33% 25%;
  --ring: 262 83% 58%;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

.font-heading {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Card Styles */
.bg-card {
  background-color: hsl(var(--card));
}

.border-border {
  border-color: hsl(var(--border));
}

/* Navigation Styles */
.nav-link {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.header-scrolled .nav-link {
  color: hsl(var(--foreground));
}

.header-scrolled .nav-link:hover {
  background-color: hsl(var(--muted));
}

/* Dropdown Menu */
.dropdown-menu {
  transition: all 0.2s ease;
}
```

#### css/animations.css
```css
/* Fade In Animation */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

/* Slide Animations */
@keyframes slide-in-right {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
}

.animate-slide-in-right {
  animation: slide-in-right 0.3s ease-out;
}

/* Hover Effects */
.hover-scale {
  transition: transform 0.2s;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Slider Styles */
.slider-container {
  position: relative;
  overflow: hidden;
}

.slider-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
}

.slider-slide.active {
  opacity: 1;
}
```

---

### 3. JavaScript Files

#### js/main.js
```javascript
// Header scroll effect
const header = document.getElementById('header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('bg-card/95', 'backdrop-blur-xl', 'shadow-lg', 'border-b', 'border-border', 'header-scrolled');
    header.classList.remove('bg-transparent');
    logo.classList.add('brightness-0');
    logo.classList.remove('brightness-100');
  } else {
    header.classList.remove('bg-card/95', 'backdrop-blur-xl', 'shadow-lg', 'border-b', 'border-border', 'header-scrolled');
    header.classList.add('bg-transparent');
    logo.classList.remove('brightness-0');
    logo.classList.add('brightness-100');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('hidden');
  menuIcon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
  lucide.createIcons();
});

// Initialize icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
```

#### js/slider.js
```javascript
class HeroSlider {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.slides = this.container.querySelectorAll('.slider-slide');
    this.dots = this.container.querySelectorAll('.slider-dot');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    
    this.init();
  }
  
  init() {
    this.showSlide(0);
    this.startAutoPlay();
    this.bindEvents();
  }
  
  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white', i === index);
      dot.classList.toggle('bg-white/50', i !== index);
    });
    this.currentIndex = index;
  }
  
  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }
  
  prevSlide() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.nextSlide(), 6000);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
  
  bindEvents() {
    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.stopAutoPlay();
        this.showSlide(index);
        this.startAutoPlay();
      });
    });
    
    // Arrow navigation
    const prevBtn = this.container.querySelector('.slider-prev');
    const nextBtn = this.container.querySelector('.slider-next');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.stopAutoPlay();
        this.prevSlide();
        this.startAutoPlay();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.stopAutoPlay();
        this.nextSlide();
        this.startAutoPlay();
      });
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const slider = new HeroSlider('hero-slider');
});
```

---

### 4. Sample Page: index.php

```php
<?php
$pageTitle = "XixaSoft - JTL Shop, Shopware, Google Ads & Laravel Development";
$pageDescription = "XixaSoft provides professional JTL Shop 5 and Shopware 6 development, JTL Wawi management, Google Ads optimization, and custom Laravel web applications.";
include 'includes/head.php';
include 'includes/header.php';
?>

<!-- Hero Slider -->
<section id="hero-slider" class="relative h-screen slider-container">
    <!-- Slide 1: E-Commerce -->
    <div class="slider-slide active">
        <div class="absolute inset-0">
            <img src="/assets/hero-ecommerce.jpg" alt="E-Commerce Development" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        </div>
        <div class="relative h-full flex items-center">
            <div class="container mx-auto px-4 lg:px-8">
                <div class="max-w-2xl">
                    <span class="inline-block px-4 py-2 rounded-full bg-primary/20 text-cyan-400 font-medium text-sm mb-6">
                        E-Commerce Excellence
                    </span>
                    <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        JTL Shop & Shopware Development
                    </h1>
                    <p class="text-white/80 text-lg mb-8">
                        Transform your online business with professional JTL Shop 5 and Shopware 6 theme development and customization.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="/services/jtl-shopware.php" class="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg hover:opacity-90 inline-flex items-center gap-2">
                            Explore E-Commerce Solutions
                            <i data-lucide="arrow-right" class="h-4 w-4"></i>
                        </a>
                        <a href="/contact.php" class="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10">
                            Get Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Slide 2: Marketing -->
    <div class="slider-slide">
        <div class="absolute inset-0">
            <img src="/assets/hero-marketing.jpg" alt="Digital Marketing" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        </div>
        <div class="relative h-full flex items-center">
            <div class="container mx-auto px-4 lg:px-8">
                <div class="max-w-2xl">
                    <span class="inline-block px-4 py-2 rounded-full bg-secondary/20 text-cyan-400 font-medium text-sm mb-6">
                        Digital Marketing
                    </span>
                    <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Google Ads & Merchant Management
                    </h1>
                    <p class="text-white/80 text-lg mb-8">
                        Maximize your ROI with expertly managed Google Ads campaigns and Merchant Center optimization.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="/services/google-ads.php" class="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg hover:opacity-90 inline-flex items-center gap-2">
                            Boost Your Marketing
                            <i data-lucide="arrow-right" class="h-4 w-4"></i>
                        </a>
                        <a href="/contact.php" class="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10">
                            Get Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Slide 3: Development -->
    <div class="slider-slide">
        <div class="absolute inset-0">
            <img src="/assets/hero-development.jpg" alt="Custom Development" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        </div>
        <div class="relative h-full flex items-center">
            <div class="container mx-auto px-4 lg:px-8">
                <div class="max-w-2xl">
                    <span class="inline-block px-4 py-2 rounded-full bg-accent/20 text-cyan-400 font-medium text-sm mb-6">
                        Custom Development
                    </span>
                    <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Laravel Web Application Development
                    </h1>
                    <p class="text-white/80 text-lg mb-8">
                        Build powerful, scalable custom web applications with our expert Laravel development team.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="/services/laravel.php" class="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg hover:opacity-90 inline-flex items-center gap-2">
                            Start Your Project
                            <i data-lucide="arrow-right" class="h-4 w-4"></i>
                        </a>
                        <a href="/contact.php" class="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10">
                            Get Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Navigation Arrows -->
    <button class="slider-prev absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
        <i data-lucide="chevron-left" class="h-6 w-6 text-white"></i>
    </button>
    <button class="slider-next absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
        <i data-lucide="chevron-right" class="h-6 w-6 text-white"></i>
    </button>
    
    <!-- Dots Navigation -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        <button class="slider-dot w-8 h-2 rounded-full bg-white transition-colors"></button>
        <button class="slider-dot w-8 h-2 rounded-full bg-white/50 transition-colors"></button>
        <button class="slider-dot w-8 h-2 rounded-full bg-white/50 transition-colors"></button>
    </div>
</section>

<!-- Services Section -->
<section class="py-24 bg-slate-950">
    <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="inline-block px-4 py-2 rounded-full bg-primary/10 text-purple-400 font-medium text-sm mb-4">
                Our Expertise
            </span>
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive IT Solutions
            </h2>
            <p class="text-gray-400 text-lg">
                We specialize in e-commerce development, digital marketing, and custom web applications.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Service Cards -->
            <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/30 transition-all group">
                <div class="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 inline-block mb-6">
                    <i data-lucide="shopping-cart" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="font-heading text-xl font-semibold text-white mb-3">JTL Shop & Shopware</h3>
                <p class="text-gray-400 mb-4">Professional theme development and customization for leading e-commerce platforms.</p>
                <a href="/services/jtl-shopware.php" class="text-purple-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>
            </div>
            
            <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div class="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 inline-block mb-6">
                    <i data-lucide="settings" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="font-heading text-xl font-semibold text-white mb-3">JTL Wawi Management</h3>
                <p class="text-gray-400 mb-4">Streamline your e-commerce operations with expert JTL Wawi configuration.</p>
                <a href="/services/jtl-wawi.php" class="text-blue-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>
            </div>
            
            <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                <div class="p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 inline-block mb-6">
                    <i data-lucide="bar-chart-3" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="font-heading text-xl font-semibold text-white mb-3">Google Ads & Merchant</h3>
                <p class="text-gray-400 mb-4">Maximize ROI with professional Google Ads and Merchant Center optimization.</p>
                <a href="/services/google-ads.php" class="text-cyan-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>
            </div>
            
            <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/30 transition-all group">
                <div class="p-4 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 inline-block mb-6">
                    <i data-lucide="code-2" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="font-heading text-xl font-semibold text-white mb-3">Laravel Development</h3>
                <p class="text-gray-400 mb-4">Build powerful, scalable custom web applications with our expert team.</p>
                <a href="/services/laravel.php" class="text-purple-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="py-20 bg-gradient-to-br from-purple-600/20 via-slate-900 to-cyan-600/20">
    <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div class="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">80+</div>
                <p class="text-gray-400">Happy Clients</p>
            </div>
            <div>
                <div class="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">45+</div>
                <p class="text-gray-400">Projects Completed</p>
            </div>
            <div>
                <div class="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">10+</div>
                <p class="text-gray-400">Years Experience</p>
            </div>
            <div>
                <div class="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
                <p class="text-gray-400">Support Available</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
    <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
            </h2>
            <p class="text-white/80 text-lg mb-8">
                Let's discuss how we can help you achieve your digital goals.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/contact.php" class="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Start Your Project
                </a>
                <a href="/portfolio.php" class="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    View Our Work
                </a>
            </div>
        </div>
    </div>
</section>

<script src="/js/slider.js"></script>

<?php include 'includes/footer.php'; ?>
```

---

## Component to HTML Mapping Reference

| React Component | PHP/HTML Equivalent |
|-----------------|---------------------|
| `<Link to="/path">` | `<a href="/path.php">` |
| `useState`, `useEffect` | Vanilla JavaScript |
| Tailwind classes | Keep same classes |
| `className={}` | `class=""` |
| Lucide React icons | `<i data-lucide="icon-name">` |
| `onClick={handler}` | `onclick="handler()"` |
| Map function | PHP foreach loop |
| React state | JavaScript variables |

---

## Recommended Tools for Conversion

1. **Cursor AI** - Use with prompt: "Convert this React component to plain PHP/HTML"
2. **Claude AI** - Excellent at understanding React patterns
3. **VS Code** - With search/replace for bulk conversions

---

## Checklist

- [ ] Copy all assets to `/assets/` folder
- [ ] Create `/includes/` folder with head.php, header.php, footer.php
- [ ] Create `/css/` folder with styles.css, animations.css
- [ ] Create `/js/` folder with main.js, slider.js
- [ ] Convert each page (index, about, services, team, portfolio, contact)
- [ ] Convert service subpages
- [ ] Convert legal pages
- [ ] Test all navigation links
- [ ] Test mobile responsiveness
- [ ] Test slider functionality
- [ ] Set up PHP server (XAMPP, WAMP, or hosting)
