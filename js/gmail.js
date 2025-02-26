document.addEventListener('DOMContentLoaded', function() {
    // Simula obtener el Gmail del usuario (���IMPORTANTE!!! Ver explicaci�n abajo)
    const gmailUsuarioSimulado = "usuario@ejemplo.com"; // Reemplaza con l�gica real si es posible

    // Extrae el nombre de usuario de la parte anterior del correo
    const nombreUsuario = gmailUsuarioSimulado.split('@')[0];

    // Inserta el nombre de usuario en el HTML
    const nombreUsuarioSpan = document.getElementById('nombreUsuario');
    nombreUsuarioSpan.textContent = nombreUsuario;

    // Simula la carga de la p�gina (reemplaza con tu l�gica real de carga)
    setTimeout(function() {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.classList.add('hidden'); // O loadingDiv.style.display = 'none';
        // Aqu� puedes agregar el c�digo para mostrar el resto del contenido de tu p�gina
        // por ejemplo:
        const mainContent = document.querySelector('main');
        mainContent.style.display = 'block'; // Aseg�rate de que tu main tenga un display: none inicial en CSS si es necesario
    }, 3000); // Simula 3 segundos de carga
});