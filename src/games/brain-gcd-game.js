import playGames from '../index.js';
import random from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';
const getDivisor = (num, num2) => {
  if (num > num2) return getDivisor(num - num2, num2);
  return num < num2 ? getDivisor(num, num2 - num) : String(num);
};
const dataOfRound = () => {
  const result = {
    num1: random(1, 50),
    num2: random(1, 50),
  };
  const question = `${result.num1} ${result.num2}`;
  const answer = getDivisor(result.num1, result.num2);
  return [question, answer];
};

export default () => playGames(description, dataOfRound);
