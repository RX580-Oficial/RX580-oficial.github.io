const games = document.querySelectorAll(".game");

games.forEach((game) => {
  const line = document.createElement("div");
  line.classList.add("animated-line");
  game.appendChild(line);

  let intervalId; // Variable para almacenar el ID del intervalo

  game.addEventListener("mouseenter", () => {
    let width = 0;
    const targetWidth = game.querySelector("span").offsetWidth;
    intervalId = setInterval(() => {
      if (width >= targetWidth) {
        clearInterval(intervalId);
      } else {
        width += 5;
        line.style.width = width + "px";
      }
    }, 10);
  });

  game.addEventListener("mouseleave", () => {
    clearInterval(intervalId); // Limpia el intervalo
    line.style.width = "0";
  });
});