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

/** Load cards */
function loadCards(){
    var game = document.getElementById('game');
    const cards = [
        {src: 'https://i.ibb.co/YRRFR6v/warrior.webp', alt: 'warrior'},
        {src: 'https://i.ibb.co/QkWbTqJ/silent-angel.webp', alt: 'silent angel'},
        {src: 'https://i.ibb.co/0YX9b8d/sauron.webp', alt: 'sauron'},
        {src: 'https://i.ibb.co/V01BQWN/goddess.webp', alt: 'goddess'},
        {src: 'https://i.ibb.co/1z6nmgJ/ghost.webp', alt: 'ghost'},
        {src: 'https://i.ibb.co/cQR9PfW/druid.webp', alt: 'druid'},
        {src: 'https://i.ibb.co/QnvC210/blonde-angel.webp', alt: 'blonde angel'},
        {src: 'https://i.ibb.co/NjcBtcx/dark-angel.webp', alt: 'dark angel'},
        {src: 'https://i.ibb.co/YRRFR6v/warrior.webp', alt: 'warrior'},
        {src: 'https://i.ibb.co/QkWbTqJ/silent-angel.webp', alt: 'silent angel'},
        {src: 'https://i.ibb.co/0YX9b8d/sauron.webp', alt: 'sauron'},
        {src: 'https://i.ibb.co/V01BQWN/goddess.webp', alt: 'goddess'},
        {src: 'https://i.ibb.co/1z6nmgJ/ghost.webp', alt: 'ghost'},
        {src: 'https://i.ibb.co/cQR9PfW/druid.webp', alt: 'druid'},
        {src: 'https://i.ibb.co/QnvC210/blonde-angel.webp', alt: 'blonde angel'},
        {src: 'https://i.ibb.co/NjcBtcx/dark-angel.webp', alt: 'dark angel'}
    ];
    cards.sort(
        /** Shuffle cards */
        function shuffle(){return 0.5 - Math.random()
        });

        cards.forEach(
            /** Display card images */
            function display(cards) {
                var cardDiv = `<div class='card'><img src='${cards.src}' alt='${cards.alt}'/></div>`;
                game.innerHTML += cardDiv;
            });

            var card = document.querySelectorAll('.card');
            /* Click event listener */
            card.forEach((card) => card.addEventListener('click', openCard));
            
            /** Open card */
            function openCard(){
                this.classList.add('cardOpen');

                setTimeout(
                    /** Matching */
                    function matching(){
                        let cardOpen = document.querySelectorAll('.cardOpen');
                    if(document.querySelectorAll('.cardOpen').length > 1){
                        // Check if two cards match
                        if (cardOpen[0].innerHTML == cardOpen[1].innerHTML){
                            cardOpen[0].classList.add('cardMatch')
                            cardOpen[1].classList.add('cardMatch')
        
                            cardOpen[1].classList.remove('cardOpen')
                            cardOpen[0].classList.remove('cardOpen')
        
                            // Alert user if all cards are matched
                            if(document.querySelectorAll('.cardMatch').length == cards.length){
                                alert('You matched all cards!')
                            }
                            
                        } else { // Close cards if not matched
                            cardOpen[1].classList.remove('cardOpen')
                            cardOpen[0].classList.remove('cardOpen')
                        }
                    }
                },500)
            }
        }