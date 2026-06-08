// Button click handlers for navigation
document.getElementById("homeButton").addEventListener("click", function() {
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

document.getElementById("roverButton").addEventListener("click", function() {
    window.location.href = "rover-recovery.html";
});

// Wait for the HTML document to be fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    const mechTitle = document.getElementById('mechTitle');
    
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
        
        // Close dropdown when scrolling
        if (mechTitle) {
            mechTitle.classList.remove('dropdown-active');
        }
    });
    
    // Dropdown toggle functionality
    if (mechTitle) {
        mechTitle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mechTitle.classList.toggle('dropdown-active');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (mechTitle && !mechTitle.contains(e.target)) {
            mechTitle.classList.remove('dropdown-active');
        }
    });
    
    // Close dropdown when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mechTitle) {
            mechTitle.classList.remove('dropdown-active');
        }
    });
    
    // Close dropdown when a menu item is clicked
    const dropdownButtons = document.querySelectorAll('.buttonGroup button');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the click from bubbling up
            if (mechTitle) {
                mechTitle.classList.remove('dropdown-active');
            }
        });
    });
});

// Select all elements you want to fade
const fadeElements = document.querySelectorAll('.fade-element');

// Create observer for fade animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.6
});

// Observe each fade element
fadeElements.forEach(element => {
    observer.observe(element);
});