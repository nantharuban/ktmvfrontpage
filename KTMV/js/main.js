// Main JavaScript for Kandenuwara Tamil Maha Vidyalayam Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initializeNavigation();
    initializeScrollEffects();
    initializeTabs();
    initializeContactForm();
    initializeAnimations();
    
    console.log('Website initialized successfully');
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            navbarToggler.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    hide: true
                });
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove shadow based on scroll position
        if (scrollTop > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll('.stat-card, .custom-card, .about-content, .tab-content');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContent = document.querySelector('.tab-content');
    
    if (tabButtons.length === 0 || !tabContent) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get tab type
            const tabType = this.getAttribute('data-tab') || this.textContent.toLowerCase().trim();
            
            // Update content based on tab
            updateTabContent(tabType, tabContent);
        });
    });
}

// Update tab content
function updateTabContent(tabType, container) {
    let content = '';
    
    switch (tabType) {
        case 'achievements':
            content = `
                <h4 class="text-primary mb-4">Academic & Sports Achievements</h4>
                <p>Our students have consistently excelled in both academic and extracurricular activities, bringing honor to our institution.</p>
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="achievement-item p-3 bg-light rounded">
                            <h5 class="text-primary">Academic Excellence</h5>
                            <p>Top results in national examinations with district rankings.</p>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="achievement-item p-3 bg-light rounded">
                            <h5 class="text-primary">Sports Achievements</h5>
                            <p>Multiple awards at zonal and provincial levels.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'projects':
            content = `
                <h4 class="text-primary mb-4">Ongoing School Projects</h4>
                <p>We are continuously working on improving our facilities and educational resources.</p>
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="project-item p-3 bg-light rounded">
                            <h5 class="text-primary">Library Expansion</h5>
                            <p>Adding more books and digital resources for enhanced learning.</p>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="project-item p-3 bg-light rounded">
                            <h5 class="text-primary">Science Lab Upgrade</h5>
                            <p>Modernizing laboratories with latest equipment.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'upcoming':
            content = `
                <h4 class="text-primary mb-4">Upcoming Events & Programs</h4>
                <p>Stay updated with our upcoming school events and important dates.</p>
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="event-item p-3 bg-light rounded">
                            <h5 class="text-primary">Annual Prize Giving</h5>
                            <p><strong>Date:</strong> April 15, 2025</p>
                            <p>Recognizing student achievements and excellence.</p>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="event-item p-3 bg-light rounded">
                            <h5 class="text-primary">New Term Begins</h5>
                            <p><strong>Date:</strong> May 2, 2025</p>
                            <p>Special orientation for new students.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            content = `
                <h4 class="text-primary mb-4">Welcome to Our Academic Excellence</h4>
                <p>Explore our comprehensive educational programs and student achievements. Use the tabs above to navigate through different sections.</p>
            `;
    }
    
    container.innerHTML = content;
    
    // Update language for new content if language system is loaded
    if (typeof updatePageLanguage === 'function' && typeof currentLanguage !== 'undefined') {
        updatePageLanguage(currentLanguage);
    }
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('#contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showAlert('Please fill in all fields.', 'warning');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address.', 'warning');
            return;
        }
        
        // Simulate form submission
        showAlert('Thank you for your message! We will get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show alert messages
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show custom-alert position-fixed`;
    alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert && alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Initialize animations
function initializeAnimations() {
    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            }
        };
        
        updateCounter();
    };
    
    // Observe stat numbers for animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/[^\d]/g, ''));
                entry.target.classList.add('animated');
                animateCounter(entry.target, number);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Utility function to load external HTML content
async function loadHTML(url, targetElement) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        if (targetElement) {
            targetElement.innerHTML = html;
        }
        return html;
    } catch (error) {
        console.error('Error loading HTML:', error);
        return null;
    }
}

// Utility function to set active navigation
function setActiveNavigation(currentPage) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize page-specific functionality
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    setActiveNavigation(currentPage);
    
    // Page-specific initializations
    switch (currentPage) {
        case 'index.html':
        case '':
            // Initialize homepage specific features
            break;
        case 'contact.html':
            initializeMap();
            break;
        case 'news.html':
            initializeNewsFilters();
            break;
        // Add more cases as needed
    }
}

// Initialize map for contact page
function initializeMap() {
    // This would be implemented when the contact page is created
    console.log('Map initialization placeholder');
}

// Initialize news filters
function initializeNewsFilters() {
    // This would be implemented when the news page is created
    console.log('News filters initialization placeholder');
}

// Export functions for global use
window.schoolWebsite = {
    loadHTML,
    showAlert,
    setActiveNavigation,
    updateTabContent,
    initializePage
};