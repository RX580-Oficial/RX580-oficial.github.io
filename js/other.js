document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            // Guardar en Local Storage
            localStorage.setItem('loginUsername', username);
            localStorage.setItem('loginPassword', password);

            alert('Inicio de sesión exitoso');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            const email = document.getElementById('registerEmail').value;

            // Guardar en Local Storage
            localStorage.setItem('registerUsername', username);
            localStorage.setItem('registerPassword', password);
            localStorage.setItem('registerEmail', email);

            alert('Registro exitoso');
        });
    }
});
