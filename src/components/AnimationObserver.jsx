import { useEffect } from 'react';

const AnimationObserver = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = element.getAttribute('data-delay') || 0;
                    
                    setTimeout(() => {
                        element.classList.add('in-view');
                    }, delay);
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return null;
};

export default AnimationObserver;
