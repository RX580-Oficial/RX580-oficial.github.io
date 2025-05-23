document.addEventListener("DOMContentLoaded", function () {
    const audioFiles = [
        "js/music/1Wake_up.mp3",
        "js/music/2Matuska_funk.mp3",
        "js/music/3GeometryDash.mp3",
    ];

    const audios = audioFiles.map((file) => new Audio(file));

    audios.forEach((audio) => {
        audio.volume = 0.2;
        audio.addEventListener("ended", playNextTrack);
    });

    let currentTrackIndex = 0;
    let isMuted = false;
    const musicList = document.getElementById("music-list");
    const musicToggle = document.querySelector(".music-toggle");
    const musicArrow = document.getElementById("music-arrow");
    const playButton = document.getElementById("play-button");

    function playTrack(trackIndex) {
        if (!isMuted) {
            audios.forEach((audio) => audio.pause());
            audios[trackIndex].currentTime = 0;
            audios[trackIndex].play()
                .then(() => {
                    console.log(`Reproduciendo: ${audioFiles[trackIndex]}`);
                })
                .catch(error => {
                    console.error(`Error al reproducir ${audioFiles[trackIndex]}:`, error);
                });
            currentTrackIndex = trackIndex;
        }
    }

    function playNextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % audios.length;
        playTrack(currentTrackIndex);
    }

    musicList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const trackIndex = parseInt(event.target.dataset.track);
            playTrack(trackIndex);
        }
    });

    musicToggle.addEventListener("click", function () {
        musicList.classList.toggle("show");
        musicArrow.innerHTML = musicList.classList.contains("show") ? "▲" : "▼";
    });

    playButton.addEventListener("click", function () {
        playTrack(currentTrackIndex);
    });
});