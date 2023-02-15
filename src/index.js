import readlineSync from 'readline-sync';
import greetings from './cli.js';

const gameRuls = (description, lounch) => {
  const userName = greetings();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const up = Math.ceil;
    const rand = [up(Math.random() * 50), up(Math.random() * 50)];
    const [question, answer] = lounch(...rand);
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');
    const correctAnswer = answer;
    if (response === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${response}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameRuls;
