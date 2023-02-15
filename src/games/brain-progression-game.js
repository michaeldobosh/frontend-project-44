import gameRuls from '../index.js';

const brainProgressionGame = () => {
  const description = 'What number is missing in the progression.';
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const progression = (interval) => {
    const numbers = [random(4, 10)];
    for (let i = 0; i <= numbers[0]; i += 1) {
      numbers.push(numbers[i] + interval);
    }
    return numbers;
  };
  const lounch = () => {
    const numbers = progression(random(0, 5));
    const index = random(0, numbers.length - 1);
    const answer = numbers[index];
    numbers[index] = '..';
    return [`${numbers.join(' ')}`, String(answer)];
  };

  gameRuls(description, lounch);
};

export default brainProgressionGame;
