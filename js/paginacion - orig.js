document.addEventListener('DOMContentLoaded', function() {
    const itemsPerRow = 8;
    const rowsPerPage = 5;
    const itemsPerPage = itemsPerRow * rowsPerPage;
    const container = document.getElementById('juegos');
    const games = Array.from(container.getElementsByClassName('game'));
    const paginationContainer = document.getElementById('pagination');

    if (!container || !paginationContainer) {
        console.error("Container or pagination container not found!");
        return;
    }

    function changePage(pageNumber) {
        const start = (pageNumber - 1) * itemsPerPage;
        const end = Math.min(start + itemsPerPage, games.length);

        games.forEach((game, index) => {
            game.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        const pageLinks = paginationContainer.getElementsByClassName('page-number');
        for (let link of pageLinks) {
            link.classList.remove('active');
        }

        if (pageNumber > 0 && pageNumber <= Math.ceil(games.length / itemsPerPage)) {
            pageLinks[pageNumber - 1].classList.add('active');
        }
    }

    function setupPagination() {
        const pageCount = Math.ceil(games.length / itemsPerPage);

        paginationContainer.innerHTML = '';

        for (let i = 1; i <= pageCount; i++) {
            const pageLink = document.createElement('span');
            pageLink.className = 'page-number';
            pageLink.textContent = i;
            pageLink.onclick = () => changePage(i);
            paginationContainer.appendChild(pageLink);

            if (pageCount > 7 && i === 3 && pageCount - i > 4) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = "...";
                paginationContainer.appendChild(ellipsis);
                i = pageCount - 2;
            }
        }

        changePage(1);
    }

    setupPagination();
});