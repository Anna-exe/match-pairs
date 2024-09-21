//* Onload functions
window.onload = () => {
    musicControls();
    loadCards();
}

/** Music controls */
function musicControls() {
    const backgroundMusic = document.getElementById('background-music');
    const playButton = document.getElementById('play-btn');
    const pauseButton = document.getElementById('pause-btn');
    
    if (playButton) {
        playButton.addEventListener('click', () => {
            backgroundMusic.play();
        });
    }

    if (pauseButton) {
        pauseButton.addEventListener('click', () => {
            backgroundMusic.pause();
        });
    }
}