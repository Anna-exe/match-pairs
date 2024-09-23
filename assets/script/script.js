//* Onload functions
window.onload = () => {
	musicControls();
	loadCards();
};

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

/** Reset game */
function reset() {
	game.innerHTML = '';
	loadCards();
}
var game = document.getElementById('game');
/** Load cards */
function loadCards() {
	document.getElementById('win-container').style.display = 'none';

	const cards = [
		{src: 'assets/images/warrior.webp', alt: 'warrior'},
        {src: 'assets/images/silent-angel.webp', alt: 'silent angel'},
        {src: 'assets/images/sauron.webp', alt: 'sauron'},
        {src: 'assets/images//goddess.webp', alt: 'goddess'},
        {src: 'assets/images/ghost.webp', alt: 'ghost'},
        {src: 'assets/images/druid.webp', alt: 'druid'},
        {src: 'assets/images/blonde-angel.webp', alt: 'blonde angel'},
        {src: 'assets/images/dark-angel.webp', alt: 'dark angel'},
		{src: 'assets/images/warrior.webp', alt: 'warrior'},
        {src: 'assets/images/silent-angel.webp', alt: 'silent angel'},
        {src: 'assets/images/sauron.webp', alt: 'sauron'},
        {src: 'assets/images//goddess.webp', alt: 'goddess'},
        {src: 'assets/images/ghost.webp', alt: 'ghost'},
        {src: 'assets/images/druid.webp', alt: 'druid'},
        {src: 'assets/images/blonde-angel.webp', alt: 'blonde angel'},
        {src: 'assets/images/dark-angel.webp', alt: 'dark angel'}
	];
	cards.sort(
		/** Shuffle cards */
		function shuffle() {
			return 0.5 - Math.random();
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
	function openCard() {
		this.classList.add('cardOpen');

		setTimeout(
			/** Matching */
			function matching() {
				let cardOpen = document.querySelectorAll('.cardOpen');
				if (document.querySelectorAll('.cardOpen').length > 1) {
					// Check if two cards match
					if (cardOpen[0].innerHTML == cardOpen[1].innerHTML) {
						cardOpen[0].classList.add('cardMatch');
						cardOpen[1].classList.add('cardMatch');

						cardOpen[1].classList.remove('cardOpen');
						cardOpen[0].classList.remove('cardOpen');

						// Display win message if all cards are matched
						if (document.querySelectorAll('.cardMatch').length == cards.length) {
							document.getElementById('win-container').style.display = 'block';
						}

					} else { // Close cards if not matched
						cardOpen[1].classList.remove('cardOpen');
						cardOpen[0].classList.remove('cardOpen');
					}
				}
			}, 500);
	}
}