const themeToggler = document.getElementById('theme-toggler');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
    if (theme === 'dark-theme') {
        themeToggler.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggler.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

themeToggler.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeToggler.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light-theme');
    } else {
        body.classList.add('dark-theme');
        themeToggler.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark-theme');
    }
});
