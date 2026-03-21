// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.documentElement;
    const currentTheme = body.getAttribute('data-theme');
    const themeToggle = document.getElementById('theme-toggle');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '☀️';
    }
}

// Check for saved theme preference or respect OS preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
    } else if (savedTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '🌙';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no saved preference, respect OS preference
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
    }
}

// Add event listener to toggle button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    initTheme();
});