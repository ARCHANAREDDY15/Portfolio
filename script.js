// Smooth Scroll for navbar links with enhanced animation
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add a subtle pulse effect to the target section
        target.style.animation = 'none';
        setTimeout(() => {
            target.style.animation = 'pulse 0.5s ease-in-out';
        }, 100);
    });
}

// Enhanced Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered animation delay
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 200);
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('.projects, .upcoming-projects, .experience, .skills, .about, .contact');
sections.forEach(section => {
    observer.observe(section);
});

// Add scroll-triggered animations for project cards
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    projectObserver.observe(card);
});

// Add scroll-triggered animations for upcoming project cards
const upcomingProjectCards = document.querySelectorAll('.upcoming-project-card');
upcomingProjectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    projectObserver.observe(card);
});

// Add scroll-triggered animations for skill items
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 50);
        }
    });
}, { threshold: 0.1 });

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px) scale(0.8)';
    item.style.transition = 'all 0.6s ease';
    skillObserver.observe(item);
});

// Add pulse animation for sections
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
