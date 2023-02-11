import readlineSync from 'readline-sync';
import greetings from './sli.js';

const userName = greetings();
const comparsion = (question, answer, name) => {
  for (let i = 0; i < 3; i += 1) {
    const rand = [];
    for (let j = 0; j < 2; j += 1) {
      rand.push(Math.ceil(Math.random() * 50));
    }
    console.log(question(...rand));
    const response = readlineSync.question('Your answer: ');
    const correctAnswer = answer(...rand);
    if (response === correctAnswer) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

function gameRun(description, question, answer) {
  console.log(description);
  comparsion(question, answer, userName);
}

export default gameRun;
