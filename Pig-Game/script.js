'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');// Supposed to be faster than querySelector
const diceEl = document.querySelector('.dice');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

