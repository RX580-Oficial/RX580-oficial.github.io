document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    const welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.textContent = 'Bienvenido';
    welcome.style.display = 'none';
    document.body.appendChild(welcome);

    console.log('Loading element:', loading);
    console.log('Welcome element created');

    // Mostrar "Bienvenido" después de ocultar "loading"
    setTimeout(() => {
        loading.classList.add('hidden');
        welcome.style.display = 'block';
        console.log('Loading hidden, welcome displayed');

        // Ocultar "Bienvenido" y mostrar el título
        setTimeout(() => {
            welcome.style.display = 'none';
            const title = document.querySelector('header h1');
            console.log('Title element:', title);
            if (title) {
                title.classList.add('aligned'); // Asegúrate de que .aligned esté definido en CSS
                console.log('Title aligned class added');
            }
        }, 3000); // Duración del mensaje "Bienvenido"
    }, 3000); // Duración del loading
});
