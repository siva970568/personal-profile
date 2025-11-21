// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Apply Theme Colors
    const root = document.documentElement;
    if (profileData.theme) {
        root.style.setProperty('--primary', profileData.theme.primaryColor);
        root.style.setProperty('--secondary', profileData.theme.secondaryColor);
        root.style.setProperty('--accent', profileData.theme.accentColor);
        root.style.setProperty('--bg-color', profileData.theme.backgroundColor);
    }

    // 2. Populate Text Content
    document.getElementById('name').textContent = profileData.name;
    document.getElementById('role').textContent = profileData.role;

    // 3. Handle Experience
    document.getElementById('experience').innerHTML = profileData.experience;

    // 4. Handle Photo
    const photoImg = document.getElementById('profile-photo');
    photoImg.src = profileData.photoUrl;
    photoImg.onerror = function () {
        this.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(profileData.name) + '&background=random';
    };

    // 5. Handle Age Visibility
    if (profileData.showAge) {
        const ageCard = document.getElementById('age-card');
        const ageValue = document.getElementById('age');
        ageCard.style.display = 'block';
        ageValue.textContent = profileData.age;
    }

    // 6. Generate Social Links
    const socialContainer = document.getElementById('social-links');
    if (profileData.socialLinks) {
        Object.entries(profileData.socialLinks).forEach(([platform, url]) => {
            if (url && url.length > 0) {
                const link = document.createElement('a');
                link.href = url;
                link.className = 'social-btn';
                link.target = '_blank';
                link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
                socialContainer.appendChild(link);
            }
        });
    }

    // 7. Render Education
    const educationContainer = document.getElementById('education-grid');
    if (profileData.education) {
        profileData.education.forEach(edu => {
            const card = document.createElement('div');
            card.className = 'education-card stat-card';
            card.style.textAlign = 'left';
            card.style.marginBottom = '15px';
            card.style.display = 'block';

            card.innerHTML = `
                <h3 style="color: var(--primary); margin-bottom: 5px;">${edu.degree}</h3>
                <p style="font-weight: bold; color: white;">${edu.school}</p>
                <p style="font-size: 0.9rem; opacity: 0.7;">${edu.year}</p>
            `;
            educationContainer.appendChild(card);
        });
    }

    // 8. Render Certifications
    const certGrid = document.getElementById('certifications-grid');

    if (profileData.certifications && certGrid) {
        profileData.certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'education-card'; // Reusing card style
            card.style.display = 'flex';
            card.style.alignItems = 'center';
            card.style.gap = '15px';

            card.innerHTML = `
                <img src="${cert.badgeUrl}" alt="${cert.name}" style="width: 60px; height: 60px; object-fit: contain;">
                <div>
                    <h3 style="color: var(--primary); margin-bottom: 5px; font-size: 1.1rem;">${cert.name}</h3>
                    <div style="color: #fff; font-weight: 600; font-size: 0.9rem;">${cert.issuer}</div>
                    <div style="color: var(--text-muted); font-size: 0.8rem; margin-top: 3px;">${cert.date}</div>
                </div>
            `;
            certGrid.appendChild(card);
        });
    }

    // 9. Initialize Magic Effects
    initMagicEffects();
});

function initMagicEffects() {
    // --- Advanced Cinematic 3D Tilt ---
    // Target all interactive elements
    const tiltElements = document.querySelectorAll('.photo-container, .stat-card, .education-card, .experience-text, .social-btn');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max rotation degrees
            const maxRotate = 20;

            const rotateX = ((y - centerY) / centerY) * -maxRotate;
            const rotateY = ((x - centerX) / centerX) * maxRotate;

            // Apply 3D transform
            el.style.transform = `perspective(1000px) translateZ(50px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            // Dynamic Shadow for realism
            const shadowX = (x - centerX) / 5;
            const shadowY = (y - centerY) / 5;
            el.style.boxShadow = `${-shadowX}px ${-shadowY}px 30px rgba(0, 243, 255, 0.3)`;

            // Add a "Sheen" effect
            el.style.filter = 'brightness(1.1)';
        });

        el.addEventListener('mouseleave', () => {
            // Reset to flat but slightly elevated state
            el.style.transform = 'perspective(1000px) translateZ(0) rotateX(0) rotateY(0)';
            el.style.boxShadow = 'none';
            el.style.filter = 'none';
            el.style.transition = 'all 0.5s ease';
        });

        el.addEventListener('mouseenter', () => {
            el.style.transition = 'none'; // Instant response on enter
        });
    });

    // --- Global Container Tilt (Subtle Background Movement) ---
    const container = document.querySelector('.container');
    if (window.matchMedia("(min-width: 850px)").matches) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }

    // --- Custom Cursor Trail (Digital Pixels) ---
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            createParticle(e.clientX, e.clientY);
        });
    }
}

function createParticle(x, y) {
    // Limit particles for performance
    if (Math.random() > 0.1) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);

    // Random size
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const colors = [profileData.theme.primaryColor, profileData.theme.secondaryColor, profileData.theme.accentColor];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Random movement
    const destinationX = x + (Math.random() - 0.5) * 50;
    const destinationY = y + (Math.random() - 0.5) * 50;

    const animation = particle.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${destinationX - x}px, ${destinationY - y}px)`, opacity: 0 }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200
    });

    animation.onfinish = () => particle.remove();
}
