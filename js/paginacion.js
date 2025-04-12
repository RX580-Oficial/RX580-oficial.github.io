document.addEventListener('DOMContentLoaded', function() {
    const juegosContainer = document.getElementById('juegos'); // Referencia al contenedor correcto
    const gameElements = Array.from(juegosContainer.getElementsByClassName('game'));
    const paginationContainer = document.getElementById('pagination');

    if (!juegosContainer || !paginationContainer) {
        console.error("Contenedor de juegos o contenedor de paginación no encontrado!");
        return;
    }

    let itemsPerRow = 8; // Valor inicial
    let itemsPerPage = itemsPerRow * 5;
    let currentPage = 1;

    function updateItemsPerRow() {
        // No necesitamos calcular el ancho del elemento individual aquí.
        // Asumimos que el layout (CSS) controlará el ancho de los elementos .game
        const containerWidth = juegosContainer.offsetWidth;
        // Podemos intentar estimar cuántos elementos caben basándonos en un ancho promedio
        // o simplemente confiar en que el CSS los distribuirá correctamente.
        // Para asegurar 8 por fila, el contenedor debería ser lo suficientemente ancho.
        itemsPerRow = 8; // Forzamos 8 elementos por fila
        itemsPerPage = itemsPerRow * 5;
    }

    function changePage(pageNumber) {
        currentPage = pageNumber;
        updateItemsPerRow(); // Aseguramos que itemsPerPage esté actualizado
        const start = (currentPage - 1) * itemsPerPage;
        const end = Math.min(start + itemsPerPage, gameElements.length);

        gameElements.forEach((game, index) => {
            game.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        setupPagination();
    }

    function setupPagination() {
        const pageCount = Math.ceil(gameElements.length / itemsPerPage);
        paginationContainer.innerHTML = '';

        const pageInfo = document.createElement('span');
        pageInfo.textContent = `Página ${currentPage} de ${pageCount}`;
        paginationContainer.appendChild(pageInfo);

        if (pageCount > 1) {
            for (let i = 1; i <= pageCount; i++) {
                const pageLink = document.createElement('span');
                pageLink.className = 'page-number';
                pageLink.textContent = i;
                pageLink.style.cursor = 'pointer'; // Añade un cursor para indicar que es clickable
                pageLink.onclick = () => changePage(i);
                paginationContainer.appendChild(pageLink);
            }
        }
    }

    // Inicialización
    updateItemsPerRow();
    setupPagination();
    changePage(1);

    window.addEventListener('resize', () => {
        changePage(currentPage);
    });
});