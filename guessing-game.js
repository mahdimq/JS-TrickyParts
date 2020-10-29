function guessingGame() {
	const randNum = Math.floor(Math.random() * 100);
	let gameOver = false;
	let guesses = 0;

	return function guess(num) {
		if (gameOver) return 'The game is over, you already won!';
		guesses++;

		if (num === randNum) {
			gameOver = true;
			return `You win! You found ${randNum} in ${guesses} guesses.`;
		}
		if (num > randNum) return `${num} is too high!`;
		if (num < randNum) return `${num} is too low!`;
	};
}

module.exports = { guessingGame };
