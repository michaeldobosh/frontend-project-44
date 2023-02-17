import playGames, { random } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const correctAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const dataOfRound = () => {
  const result = random(1, 50);
  const question = `${result}`;
  const answer = correctAnswer(result);
  return [question, answer];
};

export default () => playGames(description, dataOfRound);
