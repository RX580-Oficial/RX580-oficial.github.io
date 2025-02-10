document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    const welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.textContent = 'Bienvenido';
    welcome.style.display = 'none';
    document.body.appendChild(welcome);

    console.log('Loading element:', loading);
    console.log('Welcome element created');

    // Mostrar "Bienvenido" despu�s de ocultar "loading"
    setTimeout(() => {
        loading.classList.add('hidden');
        welcome.style.display = 'block';
        console.log('Loading hidden, welcome displayed');

        // Ocultar "Bienvenido" y mostrar el t�tulo
        setTimeout(() => {
            welcome.style.display = 'none';
            const title = document.querySelector('header h1');
            console.log('Title element:', title);
            if (title) {
                title.classList.add('aligned'); // Aseg�rate de que .aligned est� definido en CSS
                console.log('Title aligned class added');
            }
        }, 3000); // Duraci�n del mensaje "Bienvenido"
    }, 3000); // Duraci�n del loading
});
