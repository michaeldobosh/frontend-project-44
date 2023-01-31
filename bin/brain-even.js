#!/usr/bin/env node
import readlineSync from 'readline-sync';

function askName() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  const gameAnswer = () => {
    const numbers = [15, 6, 7];
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (const number of numbers) {
      let correctAnswer = '';
      if(number % 2 === 0) {
        correctAnswer = 'yes';
      } else {
        correctAnswer = 'no';
      }
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === correctAnswer) {
        console.log('Correct!');
        if (number === numbers[numbers.length -1]) console.log(`Congratulations, ${yourName}`);
      } else {
        console.log("'" + answer + "' is wrong answer ;(. Correct answer was " + "'" + correctAnswer + "'");
        console.log(`Let's try again, ${yourName}`);
        break;
      }
    }
  };
  gameAnswer();
}

askName();
