#!/usr/bin/env node

import readlineSync from 'readline-sync';

function askName() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  const gameAnswer = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
      const number = Math.floor(Math.random() * 100);
      let correctAnswer = '';
      if (number % 2 === 0) {
        correctAnswer = 'yes';
      } else {
        correctAnswer = 'no';
      }
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === correctAnswer) {
        console.log('Correct!');
        if (i === 2) console.log(`Congratulations, ${yourName}`);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${yourName}`);
        break;
      }
    }
  };
  gameAnswer();
}

askName();
