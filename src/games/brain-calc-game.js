#!/usr/bin/env node

import gameRun from '../index.js';

function brainCalcGame() {
  const description = 'What is the result of the expression?';
  const signs = ['+', '-', '*'];
  const sign = (data) => data[Math.floor(Math.random() * 3)];
  let getSign = sign(signs);
  const correct = (rand, rand2) => {
    if (getSign === '+') {
      getSign = sign(signs);
      return String(rand + rand2);
    }
    if (getSign === '-') {
      getSign = sign(signs);
      return String(rand - rand2);
    }
    getSign = sign(signs);
    return String(rand * rand2);
  };
  const question = (rand, rand2) => {
    if (getSign === '+') return `Question: ${rand} + ${rand2}`;
    if (getSign === '-') return `Question: ${rand} - ${rand2}`;
    return `Question: ${rand} * ${rand2}`;
  };

  gameRun(description, correct, question, sign);
}

export default brainCalcGame;
