/**
 * Resume Website Template - Main JavaScript
 * Handles language switching, animations, theme application, and dynamic content loading
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initializeTheme();
    
    // Initialize other components
    initializePersonalInfo();
    initializeFooter();
    initializeLanguage();
    initializeNavigation();
    initializeAnimations();
    
    console.log('Resume website template loaded successfully!');
});

// ============================================================================
// THEME MANAGEMENT
// ============================================================================
function initializeTheme() {
    const theme = resumeConfig.theme;
    let colors;
    
    if (theme.preset === 'custom') {
        colors = theme.custom;
    } else {
        const preset = themePresets[theme.preset] || themePresets.blue;
        colors = {
            primary: preset.primary,
            primaryHover: preset.primaryHover,
            textPrimary: '#ffffff',
            textSecondary: 'rgba(255, 255, 255, 0.8)',
            textTertiary: 'rgba(255, 255, 255, 0.7)',
            surfacePrimary: 'rgba(255, 255, 255, 0.05)',
            surfaceSecondary: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            backgroundGradient: preset.backgroundGradient
        };
    }
    
    // Apply theme colors to CSS variables
    applyTheme(colors);
}

function applyTheme(colors) {
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--primary-hover', colors.primaryHover);
    root.style.setProperty('--text-primary', colors.textPrimary);
    root.style.setProperty('--text-secondary', colors.textSecondary);
    root.style.setProperty('--text-tertiary', colors.textTertiary);
    root.style.setProperty('--surface-primary', colors.surfacePrimary);
    root.style.setProperty('--surface-secondary', colors.surfaceSecondary);
    root.style.setProperty('--border-color', colors.borderColor);
    root.style.setProperty('--shadow-color', colors.shadowColor);
    
    // Apply background gradient
    if (colors.backgroundGradient) {
        document.body.style.background = colors.backgroundGradient;
    }
}

// ============================================================================
// PERSONAL INFORMATION SETUP
// ============================================================================
function initializePersonalInfo() {
    const config = resumeConfig.personal;
    
    // Update page title and meta description
    document.getElementById('page-title').textContent = `${config.name} - ${config.jobTitle.en}`;
    document.getElementById('page-description').content = config.summary.en.substring(0, 160) + '...';
    
    // Update header information
    document.getElementById('header-name').textContent = config.name;
    document.getElementById('header-email').textContent = config.email;
    
    // Update experience numbers
    const experienceNum = config.yearsExperience.replace(/[^0-9]/g, '');
    document.getElementById('experience-number').textContent = experienceNum;
    document.getElementById('experience-shadow').textContent = experienceNum;
    
    // Update contact button links
    const contactButtons = ['sidebar-contact-btn', 'header-contact-btn'];
    contactButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.href = `mailto:${config.email}`;
        }
    });
}

// ============================================================================
// FOOTER CONFIGURATION
// ============================================================================
function initializeFooter() {
    const footer = document.getElementById('footer');
    footer.style.display = 'block';

    const footerText = document.getElementById('footer-text');
    const githubLink = document.getElementById('github-link');

    footerText.textContent = "No Rights Reserved. This code is free to use, modify, distribute without restriction. No attribution is required. Nothing is obfuscated, and transparency is encouraged!";
    githubLink.innerHTML = `<a href="https://github.com/simardwtf" target="_blank" style="color: #007bff; text-decoration: none;">"github.com/simardwtf"</a>`;
}

// ============================================================================
// LANGUAGE MANAGEMENT
// ============================================================================
let currentLanguage = 'en';

function initializeLanguage() {
    const langToggle = document.getElementById('sidebar-lang-toggle');
    
    // Set initial language
    updateLanguage(currentLanguage);
    
    // Language toggle event listener
    langToggle.addEventListener('change', function() {
        currentLanguage = this.checked ? 'fr' : 'en';
        updateLanguage(currentLanguage);
    });
}

function updateLanguage(lang) {
    const data = window.languageData[lang];
    
    // Update all elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const value = getNestedValue(data, key);
        if (value) {
            element.textContent = value;
        }
    });
    
    // Update page title
    const config = resumeConfig.personal;
    document.getElementById('page-title').textContent = `${config.name} - ${config.jobTitle[lang]}`;

    // Update footer text based on language
    const footerText = document.getElementById('footer-text');
    const footerTexts = {
        en: "No Rights Reserved. This code is free to use, modify, distribute without restriction. No attribution is required. Nothing is obfuscated, and transparency is encouraged!",
        fr: "Aucun Droit Réservé. Ce code est libre d'utilisation, modification, distribution sans restriction. Aucune attribution n'est requise. Rien n'est obfusqué, et la transparence est encouragée!"
    };
    footerText.textContent = footerTexts[lang];

    // Populate dynamic content
    populateWorkHistory(data.sections.workHistory.jobs);
    populateSkills(data.sections.skills.skillsList);
    populateLanguages(data.sections.languages.languagesList);
    populateTimeline(data.sections.timeline.timelineItems);
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// ============================================================================
// DYNAMIC CONTENT POPULATION
// ============================================================================
function populateWorkHistory(jobs) {
    const workList = document.getElementById('work-list');
    workList.innerHTML = '';
    
    jobs.forEach(job => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        
        let responsibilitiesHtml = '';
        if (job.responsibilities && job.responsibilities.length > 0) {
            responsibilitiesHtml = `
                <div class="description">
                    <ul>
                        ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        workItem.innerHTML = `
            <div class="work-content">
                <div class="work-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                </div>
                <div class="job-title">${job.title}</div>
                <div class="company">${job.company}</div>
                <div class="date">${job.date}</div>
                ${responsibilitiesHtml}
            </div>
        `;
        
        workList.appendChild(workItem);
    });
}

function populateSkills(skills) {
    const skillsContent = document.getElementById('skills-content');
    skillsContent.innerHTML = '';
    
    // Split skills into two columns
    const midpoint = Math.ceil(skills.length / 2);
    const firstColumn = skills.slice(0, midpoint);
    const secondColumn = skills.slice(midpoint);
    
    const columns = [firstColumn, secondColumn];
    
    columns.forEach(columnSkills => {
        const column = document.createElement('div');
        column.className = 'skills-column';
        
        const skillsList = document.createElement('ul');
        
        columnSkills.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
        
        column.appendChild(skillsList);
        skillsContent.appendChild(column);
    });
}

function populateLanguages(languages) {
    const languagesContent = document.getElementById('languages-content');
    languagesContent.innerHTML = '';
    
    languages.forEach(language => {
        const languageItem = document.createElement('div');
        languageItem.className = 'language-item';
        
        languageItem.innerHTML = `
            <div class="language-dot"></div>
            <div class="language-text">${language.name}</div>
            <div class="language-rating">
                <div class="rating-bar">
                    <div class="rating-fill" data-width="${language.level}%"></div>
                </div>
                <div class="proficiency">${language.proficiency}</div>
            </div>
        `;
        
        languagesContent.appendChild(languageItem);
    });
}

function populateTimeline(timelineItems) {
    const timelineContent = document.getElementById('timeline-content');
    timelineContent.innerHTML = '';
    
    timelineItems.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content-item">
                <div class="timeline-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="m12 1 0 6m0 6 0 6"/>
                        <path d="m17 12 5 0m-5 0-5 0"/>
                    </svg>
                </div>
                <div class="timeline-info">
                    <div class="timeline-name">${item.title}</div>
                    <div class="timeline-date">${item.date}</div>
                </div>
            </div>
        `;
        
        timelineContent.appendChild(timelineItem);
    });
}

// ============================================================================
// NAVIGATION AND SCROLL HANDLING
// ============================================================================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-item a');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 100;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-item a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// ============================================================================
// ANIMATIONS AND VISUAL EFFECTS
// ============================================================================
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('work-item')) {
                    animateWorkItem(element);
                } else if (element.classList.contains('language-item')) {
                    animateLanguageItem(element);
                } else if (element.classList.contains('timeline-item')) {
                    animateTimelineItem(element);
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe elements after a short delay to ensure they're populated
    setTimeout(() => {
        document.querySelectorAll('.work-item, .language-item, .timeline-item').forEach(item => {
            observer.observe(item);
        });
    }, 500);
    
    // Initialize other animations
    initializeScrollEffects();
    initializeHoverEffects();
}

function animateWorkItem(item) {
    item.style.animation = 'slideInLeft 0.6s ease-out forwards';
}

function animateLanguageItem(item) {
    item.style.animation = 'fadeInScale 0.6s ease-out forwards';
    
    // Animate language rating bar
    const ratingFill = item.querySelector('.rating-fill');
    if (ratingFill) {
        const width = ratingFill.getAttribute('data-width') || '0%';
        setTimeout(() => {
            ratingFill.style.width = width;
        }, 300);
    }
}

function animateTimelineItem(item) {
    item.style.animation = 'slideInRight 0.6s ease-out forwards';
}

function initializeScrollEffects() {
    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const sections = document.querySelectorAll('.section');
        
        sections.forEach((section, index) => {
            const rate = scrolled * -0.5;
            section.style.backgroundPosition = `center ${rate}px`;
        });
    });
    
    // Trigger number animation when overview section is visible
    const overviewSection = document.querySelector('.overview-section');
    if (overviewSection) {
        const overviewObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber();
                    overviewObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        overviewObserver.observe(overviewSection);
    }
}

function initializeHoverEffects() {
    // Add hover effects for skills (after they're populated)
    setTimeout(() => {
        document.querySelectorAll('.skills-column li').forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px) scale(1.02)';
            });
            
            skill.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
            });
        });
    }, 100);
}

// Typing effect for overview number
function animateNumber() {
    const numberElement = document.querySelector('.number');
    if (numberElement) {
        const finalNumber = parseInt(numberElement.textContent);
        let currentNumber = 0;
        const increment = finalNumber / 30;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                currentNumber = finalNumber;
                clearInterval(timer);
            }
            numberElement.textContent = Math.floor(currentNumber);
        }, 50);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .animate-in {
        animation: fadeInScale 0.6s ease-out forwards;
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .sidebar-nav {
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
        }
        
        .sidebar-nav.active {
            box-shadow: 2px 0 20px rgba(0, 0, 0, 0.5);
        }
    }
`;

document.head.appendChild(style);
