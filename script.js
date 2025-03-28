let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

sc();

let isAutoPlay = false;
let Id;

function autoPlay() {
    if (!isAutoPlay) {
        Id = setInterval(function () {
            const player = pickComputermove();
            playGame(player);
        }, 1000);
        isAutoPlay = true;
    } else {
        clearInterval(Id);
        isAutoPlay = false;
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors');
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
});

function playGame(player) {
    const computermove = pickComputermove();
    let result = '';

    if (player === 'Rock') {
        result = computermove === 'Rock' ? 'Tie.' : computermove === 'Paper' ? 'you lose.' : 'you win.';
    } else if (player === 'Paper') {
        result = computermove === 'Rock' ? 'you win.' : computermove === 'Paper' ? 'Tie.' : 'you lose.';
    } else if (player === 'Scissors') {
        result = computermove === 'Rock' ? 'you lose.' : computermove === 'Paper' ? 'you win.' : 'Tie.';
    }

    if (result === 'you win.') {
        score.wins++;
    } else if (result === 'you lose.') {
        score.losses++;
    } else if (result === 'Tie.') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    sc();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `
        You <img src="images/${player}-emoji.png" class="img-icon">
        <img src="images/${computermove}-emoji.png" class="img-icon"> Computer
    `;
}

function sc() {
    document.querySelector('.js-score').innerHTML = `
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `;
}

function pickComputermove() {
    const randnum = Math.random();
    return randnum < 1 / 3 ? 'Rock' : randnum < 2 / 3 ? 'Paper' : 'Scissors';
}
