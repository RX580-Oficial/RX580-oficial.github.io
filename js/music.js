document.addEventListener("DOMContentLoaded", function () {
    let audio1 = new Audio("RX580.m4a");
    let audio2 = new Audio("intro.m4a");
    audio1.volume = 0.2; // Volumen del 20%
    audio2.volume = 0.2; // Volumen del 20%

    let isMuted = localStorage.getItem("isMuted") === "true";
    const muteButton = document.getElementById("muteButton");

    if (!isMuted) {
        audio1.play();
    }

    audio1.addEventListener("ended", function () {
        if (!isMuted) {
            audio2.play();
        }
    });

    audio2.addEventListener("ended", function () {
        if (!isMuted) {
            audio1.play();
        }
    });

    muteButton.addEventListener("click", function () {
        if (isMuted) {
            audio1.play();
            muteButton.innerText = "Mutear Música";
        } else {
            audio1.pause();
            audio2.pause();
            muteButton.innerText = "Escuchar Música";
        }
        isMuted = !isMuted;
        localStorage.setItem("isMuted", isMuted);
    });

    window.onbeforeunload = function () {
        localStorage.setItem("currentTime1", audio1.currentTime);
        localStorage.setItem("currentTime2", audio2.currentTime);
    };

    audio1.currentTime = localStorage.getItem("currentTime1") || 0;
    audio2.currentTime = localStorage.getItem("currentTime2") || 0;

    if (isMuted) {
        audio1.pause();
        audio2.pause();
        muteButton.innerText = "Escuchar Música";
    } else {
        audio1.play();
    }
});
