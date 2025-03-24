// Smooth scroll functionality
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.cta-final').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic trust elements
const trustData = {
    rating: '4.9/5',
    users: '100,000+',
    testimonials: ['"Life-changing app!" - Sarah', '"Finally kept my resolutions!" - Mike']
};

const trustSection = document.createElement('div');
trustSection.className = 'trust-badges';
trustSection.innerHTML = `
    <div class="rating">⭐ ${trustData.rating}</div>
    <div class="users">${trustData.users} happy users</div>
    <div class="testimonials">
        ${trustData.testimonials.map(t => `<div>${t}</div>`).join('')}
    </div>
`;

document.querySelector('.cta-final').appendChild(trustSection);

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.feature').forEach(feature => {
    feature.style.opacity = 0;
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.6s ease-out';
    observer.observe(feature);
});