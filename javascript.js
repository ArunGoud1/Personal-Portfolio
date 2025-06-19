const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.Logo');
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const barsBox = document.querySelector('.bars-box');


// Bars animation
const activePage = () => {
    barsBox.classList.remove('active');
    header.classList.remove('active');

    setTimeout(() => {
        barsBox.classList.add('active');
        header.classList.add('active');
    }, 100); // Adjust if bar animation duration changes
};

// Remove all section active states initially
sections.forEach(section => section.classList.remove('active'));
// Show first section on load
if (sections[0]) sections[0].classList.add('active');
header.classList.add('active'); // Animate header on first load

// Handle nav link clicks
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        // Reset active classes
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        sections.forEach(section => section.classList.remove('active'));

        // Play bars animation
        activePage();

        // Show section after bar transition ends
        setTimeout(() => {
            if (sections[idx]) sections[idx].classList.add('active');
        }, 600); // Match with bars animation duration
    });
});

// Handle logo click (reset to first section)
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks.forEach(nav => nav.classList.remove('active'));
        navLinks[0].classList.add('active');
        sections.forEach(section => section.classList.remove('active'));

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 600);
    }
});

// Portfolio Carousel Logic
const arrowRight = document.querySelector('.Portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.Portfolio-box .navigation .arrow-left');
let index = 0;
const PortfolioDetails = document.querySelectorAll('.Portfolio-detail');
const totalSlides = PortfolioDetails.length;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.Portfolio-carousel .img-slide');
    imgSlide.style.transform = `translateX(-${index * 100}%)`;

    PortfolioDetails.forEach(detail => detail.classList.remove('active'));
    if (PortfolioDetails[index]) {
        PortfolioDetails[index].classList.add('active');
    }

    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalSlides - 1);
};

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

// Resume Tabs Logic
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Remove 'active' from all buttons and details
        resumeBtns.forEach(b => b.classList.remove('active'));
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        // Add 'active' to clicked button and corresponding detail
        btn.classList.add('active');
        if (resumeDetails[idx]) {
            resumeDetails[idx].classList.add('active');
        }
    });
});


// Initialize
activePortfolio();

