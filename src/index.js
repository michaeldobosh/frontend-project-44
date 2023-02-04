import readlineSync from 'readline-sync';

const greetings = () => {
  const yourName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${yourName}!`);
  return yourName;
};
const userName = greetings();
const comparsion = (correct, question, name) => {
  for (let i = 0; i < 3; i += 1) {
    const rand = [];
    for (let j = 0; j < 2; j += 1) {
      rand.push(Math.ceil(Math.random() * 50));
    }
    console.log(question(...rand));
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = correct(...rand);
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

function gameRun(description, correct, question) {
  console.log(description);
  comparsion(correct, question, userName);
}

export default gameRun;
