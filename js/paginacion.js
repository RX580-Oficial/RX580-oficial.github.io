document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 40; // 8 elementos por línea * 5 líneas
    const container = document.getElementById('juegos');
    const games = Array.from(container.getElementsByClassName('game'));
    const paginationContainer = document.getElementById('pagination');

    if (!container || !paginationContainer) {
        console.error("Container or pagination container not found!");
        return; // Stop execution if elements are missing
    }


    function changePage(pageNumber) {
        const start = (pageNumber - 1) * itemsPerPage;
        const end = Math.min(start + itemsPerPage, games.length); // Prevent going beyond the last element

        games.forEach((game, index) => {
            game.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        const pageLinks = paginationContainer.getElementsByClassName('page-number');
        for (let link of pageLinks) {
            link.classList.remove('active');
        }

        // Check if the page number is valid
        if (pageNumber > 0 && pageNumber <= Math.ceil(games.length / itemsPerPage)) {
            pageLinks[pageNumber - 1].classList.add('active');
        }
    }

    function setupPagination() {
        const pageCount = Math.ceil(games.length / itemsPerPage);

        // Clear existing pagination links to prevent duplicates
        paginationContainer.innerHTML = '';  // Or: paginationContainer.textContent = '';

        for (let i = 1; i <= pageCount; i++) {
            const pageLink = document.createElement('span');
            pageLink.className = 'page-number';
            pageLink.textContent = i;
            pageLink.onclick = () => changePage(i);
            paginationContainer.appendChild(pageLink);

            // Add ellipsis (...) if needed (more than, say, 7 pages)
            if (pageCount > 7 && i === 3 && pageCount - i > 4) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = "...";
                paginationContainer.appendChild(ellipsis);
                i = pageCount - 2; // Jump to near the end
            }
        }

        changePage(1);
    }

    setupPagination();
});
