document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: false
    });

    // Reveal logo
    sr.reveal('.logo img', {
        origin: 'top',
        distance: '20px',
        delay: 100
    });

    // Reveal intro section titles
    sr.reveal('.reveal-title', {
        delay: 300,
        distance: '30px'
    });
    
    sr.reveal('.reveal-subtitle', {
        delay: 500,
        distance: '30px'
    });

    // Reveal couple photos with different origins
    sr.reveal('.reveal-left', {
        origin: 'left',
        distance: '100px',
        delay: 300
    });
    
    sr.reveal('.reveal-right', {
        origin: 'right',
        distance: '100px',
        delay: 300
    });

    // Reveal gratitude message
    sr.reveal('.reveal-bottom', {
        delay: 400,
        distance: '50px',
        interval: 200
    });

    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Parallax for intro section
        document.querySelector('.intro').style.backgroundPosition = `50% ${scrollPosition * 0.4}px`;
        
        // Parallax for group photo section
        document.querySelector('.group-photo').style.backgroundPosition = `50% ${-scrollPosition * 0.2}px`;
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.couple, .message, .quote');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});