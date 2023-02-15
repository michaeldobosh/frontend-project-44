import readlineSync from 'readline-sync';
import greetings from './cli.js';

const gameRuls = (description, lounch) => {
  const userName = greetings();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const rand = [Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50)];
    const [question, answer] = lounch(...rand);
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');
    if (response === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'. 
      \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameRuls;
