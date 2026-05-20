document.getElementById("mechButton").addEventListener("click", function() {
    window.location.href = "mech25.html";
});

document.getElementById("disasterButton").addEventListener("click", function() {
    window.location.href = "natural-disaster.html";
});

document.getElementById("solderButton").addEventListener("click", function() {
    window.location.href = "soldering.html";
});

document.getElementById("monitorButton").addEventListener("click", function() {
    window.location.href = "monitoring-station.html";
});

document.getElementById("basicButton").addEventListener("click", function() {
    window.location.href = "robot-programming.html";
});

// Wait for the HTML document to be fully loaded before running the code
// mechScript.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    
    // Add visible class after a tiny delay to trigger the drop animation
    setTimeout(function() {
        navbar.classList.add('nav-visible');
    }, 100);
    
    // Scroll hide/show logic
    let lastScrollTop = 0;
    const SCROLL_THRESHOLD = 5;
    
    window.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(currentScrollTop - lastScrollTop) <= SCROLL_THRESHOLD) {
            return;
        }
        
        if (currentScrollTop > lastScrollTop) {
            // Scrolling DOWN
            navbar.classList.add('nav-hidden');
            navbar.classList.remove('nav-visible');
        } else {
            // Scrolling UP
            navbar.classList.remove('nav-hidden');
            navbar.classList.add('nav-visible');
        }
        
        if (currentScrollTop <= 0) {
            navbar.classList.remove('nav-hidden');
            navbar.classList.add('nav-visible');
        }
        
        lastScrollTop = currentScrollTop;
    });
});

// Select all elements you want to fade
const fadeElements = document.querySelectorAll('.fade-element');

// Create observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // Optional: fade out when scrolled past
        }
    });
}, {
    threshold: 0.6  // Element is considered visible when 80% is in view
});

// Observe each element
fadeElements.forEach(element => {
    observer.observe(element);
});