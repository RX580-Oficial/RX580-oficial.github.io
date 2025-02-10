document.addEventListener('DOMContentLoaded', function() {
  const games = Array.from(document.getElementsByClassName('game'));

  games.forEach(game => {
    const img = game.querySelector('img');
    const title = game.querySelector('span').textContent;
    img.setAttribute('title', title);
  });
});
