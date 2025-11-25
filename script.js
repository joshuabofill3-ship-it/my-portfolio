// Contact Button Animation
    document.getElementById('contactBtn').addEventListener('click', function() {
      alert('🎮 Let\'s team up! Add me in Mobile Legends: Joshua Bofill 🎮');
    });

    // Hero Card Animation on Load
    const heroCards = document.querySelectorAll('.hero-card');
    heroCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });

    // Add glow effect to profile pic on hover
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 40px rgba(233, 69, 96, 0.8)';
    });
    profilePic.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 8px 25px rgba(233, 69, 96, 0.4)';
    });

    // Scroll animation for sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });

    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.8s, transform 0.8s';
      observer.observe(section);
    });