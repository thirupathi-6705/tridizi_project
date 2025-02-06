// DOM Elements
const instructorsBtn = document.getElementById('instructorsBtn');
const categoriesBtn = document.getElementById('categoriesBtn');
const categoryButtons = document.querySelectorAll('.category-button');

// Category Selection
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        if (button.classList.contains('selected')) {
            button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            button.style.borderColor = 'white';
        } else {
            button.style.backgroundColor = 'transparent';
            button.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }
    });
});

// Dropdown Toggles
function setupDropdown(button) {
    let isOpen = false;
    
    button.addEventListener('click', () => {
        isOpen = !isOpen;
        const arrow = button.querySelector('svg');
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
    });
}

setupDropdown(instructorsBtn);
setupDropdown(categoriesBtn);

// Scroll Effects
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#111111';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

// Mobile Menu Toggle (if needed)
const setupMobileMenu = () => {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'md:hidden p-2';
    mobileMenuBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `;
    
    // Add mobile menu functionality here if needed
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
});