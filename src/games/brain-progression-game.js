import playGames, { random } from '../index.js';

const description = 'What number is missing in the progression.';
const progression = (interval) => {
  const numbers = [random(1, 10)];
  const lengthProgression = random(5, 15);
  for (let i = 0; i <= lengthProgression; i += 1) {
    numbers.push(numbers[i] + interval);
  }
  return numbers;
};
const dataOfRound = () => {
  const result = progression(random(1, 5));
  const index = random(0, result.length);
  const answer = String(result[index]);
  result[index] = '..';
  const question = `${result.join(' ')}`;
  return [question, answer];
};

export default () => playGames(description, dataOfRound);
