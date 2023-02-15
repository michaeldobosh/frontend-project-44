import readlineSync from 'readline-sync';
import greetings from './cli.js';

const playGames = (description, rounds) => {
  const userName = greetings();
  console.log(description);
  const [question, answer, raunds] = rounds();
  for (let raund = 0; raund < raunds; raund += 1) {
    console.log(`Question: ${question[raund]}`);
    const response = readlineSync.question('Your answer: ');
    if (response === answer[raund]) {
      console.log('Correct!');
    } else {
      return console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer[raund]}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGames;
export const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
