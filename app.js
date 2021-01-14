import { computerThrow, didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';
import { showComputerSelectionImg } from './dom-utils.js';

const throwButton = document.getElementById('throw-button');
const resetButton = document.getElementById('reset-button');

const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');
const drawsSpan = document.getElementById('draws-span');

const opponentSelectionImg = document.getElementById('opponent-selection-img');
const opponentMessageDiv = document.getElementById('opponent-message');



// initialize state
let wins = 0;
let draws = 0;
let total = 0;

// set event listeners to update state and DOM

throwButton.addEventListener('click', () => {
    total ++;

    const computersCurThrow = computerThrow(getRandomThrow());
    showComputerSelectionImg(computersCurThrow, opponentSelectionImg);

    const userThrow = document.querySelector('input[type ="radio"]:checked') !== null ? document.querySelector('input[type ="radio"]:checked').value : 'none';

    if (userThrow === 'none'){
        opponentMessageDiv.textContent = 'make a selection... or are you SCARED!?!?';
    }

    const userResultString = didUserWin(userThrow, computersCurThrow);

    console.log(userThrow);
    if (userResultString === 'win'){
        wins ++;
        opponentMessageDiv.textContent = 'Wow, you beat me!';
    }
    if (userResultString === 'draw'){
        draws ++;
        opponentMessageDiv.textContent = 'draw huh? LET\'S GO AGAIN!';

    }
    if (userResultString === 'lose'){
        opponentMessageDiv.textContent = 'Haha, take that!';
    }

    updateView();

}); 

resetButton.addEventListener('click', () => {
    wins = 0;
    draws = 0;
    total = 0;
    updateView();
    opponentSelectionImg.src = 'assets/blackimg.png';
    opponentMessageDiv.textContent = 'Ready to lose approximately 33% of the time?!?!?';

}); 

function updateView() {
    winsSpan.textContent = wins;
    drawsSpan.textContent = draws;
    lossesSpan.textContent = total - (wins + draws);
}
