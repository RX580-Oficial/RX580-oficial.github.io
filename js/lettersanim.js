const text = "Sitio oficial de descargas de RX580";
const animatedText = document.getElementById("animated-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150); // Ajusta la velocidad de escritura (en milisegundos)
  } else {
    // Si quieres que el texto se borre y vuelva a empezar:
    setTimeout(() => {
        index = 0;
        animatedText.textContent = "";
        typeWriter();
    }, 2000)
  }
}

typeWriter();