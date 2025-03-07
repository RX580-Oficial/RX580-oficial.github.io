document.addEventListener('DOMContentLoaded', function() {
    const galleta = document.getElementById('galleta');
    const aceptar = document.getElementById('aceptar');
    const rechazar = document.getElementById('rechazar');
    const privacidad = document.getElementById('privacidad');
    const privacidadModal = document.getElementById('privacidad-modal');
    const verPrivacidad = document.getElementById('ver-privacidad');
    const cerrar = document.querySelector('.cerrar');
    const overlay = document.getElementById('overlay');
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const sociosModal = document.getElementById('socios-modal');
    const vermas = document.getElementById('ver-mas');
    const cerrarSocios = document.querySelector('.cerrar-socios');

    vermas.addEventListener('click', (e)=>{
      e.preventDefault();
      sociosModal.style.display = 'block';
      overlay.style.display = 'block';
    });
    cerrarSocios.addEventListener('click', ()=>{
      sociosModal.style.display = 'none';
      overlay.style.display = 'none';
    })

    aceptar.addEventListener('click', () => {
        if (privacidad.checked) {
            localStorage.setItem('cookiesAceptadas', 'true');
            if (galleta) {
                galleta.style.display = 'none';
            }
            overlay.style.display = 'none';
            if (contenidoPrincipal) {
                contenidoPrincipal.style.display = 'block';
            }
        } else {
            alert('Debes aceptar la declaración de privacidad.');
        }
    });

    rechazar.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
    });

    verPrivacidad.addEventListener('click', (e) => {
        e.preventDefault();
        privacidadModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    cerrar.addEventListener('click', () => {
        privacidadModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == privacidadModal) {
            privacidadModal.style.display = 'none';
            overlay.style.display = 'none';
        }
        if (e.target == sociosModal){
          sociosModal.style.display = 'none';
          overlay.style.display = 'none';
        }
    });

    if (localStorage.getItem('cookiesAceptadas') !== 'true') {
        overlay.style.display = 'block';
    } else {
        if (galleta) {
            galleta.style.display = 'none';
        }
        if (contenidoPrincipal) {
            contenidoPrincipal.style.display = 'block';
        }
    }
});