import playGames from '../index.js';
import random from '../random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = Math.floor(num / 2); i >= 2; i -= 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const correctAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
const dataOfRound = () => {
  const result = [random(1, 50)];
  const question = `${result}`;
  const answer = correctAnswer(result);
  return [question, answer];
};

export default () => playGames(description, dataOfRound);
