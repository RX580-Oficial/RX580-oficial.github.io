document.addEventListener('DOMContentLoaded', function() {
  const itemsPerPage = 40; // 8 elementos por línea * 5 líneas
  const container = document.getElementById('juegos');
  const games = Array.from(container.getElementsByClassName('game'));
  const paginationContainer = document.getElementById('pagination');

  function changePage(pageNumber) {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    games.forEach((game, index) => {
      game.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    const pageLinks = paginationContainer.getElementsByClassName('page-number');
    for (let link of pageLinks) {
      link.classList.remove('active');
    }
    pageLinks[pageNumber - 1].classList.add('active');
  }

  function setupPagination() {
    const pageCount = Math.ceil(games.length / itemsPerPage);
    for (let i = 1; i <= pageCount; i++) {
      const pageLink = document.createElement('span');
      pageLink.className = 'page-number';
      pageLink.textContent = i;
      pageLink.onclick = () => changePage(i);
      paginationContainer.appendChild(pageLink);
    }

    changePage(1);
  }

  setupPagination();
});
