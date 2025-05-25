const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (box.id === 'games') {
      // Abre la p�gina de juegos
      window.open('index.html', '_blank');
    } else if (box.id === 'videos') {
      // Abre la p�gina de videos
      window.open('mis_videos.html', '_blank');
    } else if (box.id === 'iniciar') {
      // Abre la p�gina de videos
      window.open('Inicio.html', '_blank');
    } else if (box.id === 'donar') {
      // Pagina de pagos
     window.open('https://www.paypal.me/proplayerpay', '_blank');
    }
  });
});