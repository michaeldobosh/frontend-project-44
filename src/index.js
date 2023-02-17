import readlineSync from 'readline-sync';
import greetings from './cli.js';

const playGames = (description, rounds) => {
  const userName = greetings();
  const numberOfRounds = 3;
  console.log(description);
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, answer] = rounds();
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');
    if (response === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGames;
export const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
