const darkModeToggle = document.getElementById('dark-mode-toggle');
const link = document.getElementById('theme-style'); // Agrega un ID al elemento <link> en tu HTML

darkModeToggle.addEventListener('click', () => {
    if (link.getAttribute('href') === 'estilos.css') {
        link.setAttribute('href', 'darkmode.css');
        localStorage.setItem('theme', 'darkmode.css'); // Guarda la preferencia en localStorage
    } else {
        link.setAttribute('href', 'estilos.css');
        localStorage.setItem('theme', 'estilos.css'); // Guarda la preferencia en localStorage
    }
});

// Verifica la preferencia del tema al cargar la página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    link.setAttribute('href', savedTheme);
}