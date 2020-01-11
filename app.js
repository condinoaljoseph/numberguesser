(function numberGuesser() {
  let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNum = getWinningNum(max, min);

  const minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');
    game = document.querySelector('#game');

    minNum.textContent = min;
    maxNum.textContent = max;

    guessBtn.addEventListener('click', guessFunc);
    game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
      window.location.reload();
    }
    });

    function guessFunc(e) {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess > max || guess < minNum) {
      console.log('hekhek')
    } else {
      if(guess === winningNum) {
        gameOver(true,`You guessed ${guess}. YOU WIN`);
      } else {
        guessesLeft--;
        if(guessesLeft !== 0) {
          setMessage(`${guess} is incorrect. You only have ${guessesLeft} guesses left`, 'red');
        } else {
          gameOver(false,'Game Over. YOU LOSE');
        }
      }
    }
  }

  function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
    guessInput.style.borderColor = color;
  }

  function gameOver(gameStatus, msg) {
    gameStatus === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

    setMessage(msg, color);
  }

  function getWinningNum(max, min) {
   return Math.floor(Math.random() * (max-min + 1) + min);
  }
})();