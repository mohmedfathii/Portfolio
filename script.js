// 1. Navbar Hide/Show Logic
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide/Show Navbar
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling Down
        navbar.style.transform = "translateY(-100%)";
    } else {
        // Scrolling Up
        navbar.style.transform = "translateY(0)";
    }

    // Add shadow/background white on scroll
    if (scrollTop > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.background = "#fff";
        navbar.style.boxShadow = "none";
    }
    
    lastScrollTop = scrollTop;
});

// 2. Reveal Sections on Scroll (Animation)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// 3. Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Run reveal once on load to show elements already in view
reveal();