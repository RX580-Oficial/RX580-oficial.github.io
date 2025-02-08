document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const container = document.getElementById('juegos');
  const games = Array.from(container.getElementsByClassName('game'));

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    games.forEach(game => {
      const title = game.querySelector('span').textContent.toLowerCase();
      game.style.display = title.includes(query) ? 'block' : 'none';
    });
  });
});
