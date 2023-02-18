import readlineSync from 'readline-sync';

const playGames = (description, roundDataGenerator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const rounds = 3;
  for (let i = 1; i <= rounds; i += 1) {
    const [question, answer] = roundDataGenerator();
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
