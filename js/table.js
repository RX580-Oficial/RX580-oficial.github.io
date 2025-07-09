const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (box.id === 'games') {
      window.open('index.html', '');
    } else if (box.id === 'cracks') {
      window.open('Cracks.html', '');
    } else if (box.id === 'videos') {
      window.open('Inicio.html', '');
    } else if (box.id === 'comentarios') {
      window.open('Comentarios.html', '');
    } else if (box.id === 'version') {
      window.open('index.html#', '');
    }
  }); // ? Este paréntesis estaba perdido como yo los lunes sin café
});
