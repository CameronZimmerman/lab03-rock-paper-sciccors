import {computerThrow} from './utils.js';
import {getRandomThrow} from './get-random-throw.js';

const throwButton = document.getElementById('throw-button');

const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');
const totalSpan = document.getElementById('total-span');

const retryButton = document.getElementById('retry-button');

const opponentSelectionImg = document.getElementById('opponent-selection-img');

// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM

throwButton.addEventListener('click', () => {

}); 

retryButton.addEventListener('click', () => {

}); 