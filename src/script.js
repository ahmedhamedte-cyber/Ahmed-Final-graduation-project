// Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
});

// Light/Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    
    // Save preference to local storage
    localStorage.setItem('theme', newTheme);
}

// Load saved theme on startup
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
};