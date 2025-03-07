// script.js

// Crear el contenedor para la llama y el texto
let flameContainer = document.createElement('div');
flameContainer.innerHTML = `
  <div style="position:relative;">
    <img src="llama.png" alt="Llama" style="width:100px; height:100px; position:absolute; top:-50px;">
    <span style="font-size:20px; color:red; font-weight:bold; position:absolute; top:60px; left:0;">Popular</span>
  </div>
`;

// Obtener el elemento del juego más descargado
let mostDownloadedGame = document.querySelector('#id_del_juego_mas_descargado');

// Añadir el contenedor de la llama y el texto encima del juego más descargado
mostDownloadedGame.appendChild(flameContainer);
