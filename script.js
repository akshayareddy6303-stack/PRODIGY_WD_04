document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons Graphic Context
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mouse Reactive Ambient Gradient Tracker
    const meshBg = document.getElementById('meshBg');
    if (meshBg) {
        window.addEventListener('mousemove', (e) => {
            const xPercentage = (e.clientX / window.innerWidth) * 100;
            const yPercentage = (e.clientY / window.innerHeight) * 100;
            
            // Set dynamic CSS parameters based on cursor telemetry coordinates
            meshBg.style.setProperty('--mouse-x', `${xPercentage}%`);
            meshBg.style.setProperty('--mouse-y', `${yPercentage}%`);
        });
    }

    // 3. High-Performance Intersection Observer for Scroll Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const animationOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    };

    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve node structural layout immediately following activation
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(intersectionCallback, animationOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Back To Top Smooth Transition Handle
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});