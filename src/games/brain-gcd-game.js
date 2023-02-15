import gameRun from '../index.js';

function brainGcdGame() {
  const description = 'Find the greatest common divisor of given numbers.';
  const getDivisor = (num, num2) => {
    if (num > num2) return getDivisor(num - num2, num2);
    return num < num2 ? getDivisor(num, num2 - num) : String(num);
  };
  const lounch = (num, num2) => [`${num} ${num2}`, getDivisor(num, num2)];

  gameRun(description, lounch);
}

export default brainGcdGame;
