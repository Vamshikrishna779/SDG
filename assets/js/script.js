document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector(".nav-links").classList.remove("active"); // Close menu on click
        });
    });
    

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    
    
    // Search functionality (Basic alert example)
    const searchButton = document.querySelector(".search-bar button");
    searchButton.addEventListener("click", function() {
        const searchQuery = document.querySelector(".search-bar input").value;
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
        } else {
            alert("Please enter a search term.");
        }
    });

    // Sticky header effect on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "#0e2a24";
        } else {
            header.style.background = "#1a3c34";
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.backgroundColor = '#f4f9f4'; // Change background on hover
        });

        item.addEventListener('mouseout', function () {
            item.style.backgroundColor = ''; // Reset background
        });
    });
});
