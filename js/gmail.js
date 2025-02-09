document.addEventListener('DOMContentLoaded', function() {
    // Simula obtener el Gmail del usuario (¡¡¡IMPORTANTE!!! Ver explicación abajo)
    const gmailUsuarioSimulado = "usuario@ejemplo.com"; // Reemplaza con lógica real si es posible

    // Extrae el nombre de usuario de la parte anterior del correo
    const nombreUsuario = gmailUsuarioSimulado.split('@')[0];

    // Inserta el nombre de usuario en el HTML
    const nombreUsuarioSpan = document.getElementById('nombreUsuario');
    nombreUsuarioSpan.textContent = nombreUsuario;

    // Simula la carga de la página (reemplaza con tu lógica real de carga)
    setTimeout(function() {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.classList.add('hidden'); // O loadingDiv.style.display = 'none';
        // Aquí puedes agregar el código para mostrar el resto del contenido de tu página
        // por ejemplo:
        const mainContent = document.querySelector('main');
        mainContent.style.display = 'block'; // Asegúrate de que tu main tenga un display: none inicial en CSS si es necesario
    }, 3000); // Simula 3 segundos de carga
});