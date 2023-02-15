import gameRuls from '../index.js';

const brainCalcGame = () => {
  const description = 'What is the result of the expression?';
  const data = () => ['+', '-', '*'][Math.floor(Math.random() * 3)];
  const lounch = (a, b) => {
    const sign = data();
    const output = `${a} ${sign} ${b}`;
    if (sign === '+') return [output, String(a + b)];
    if (sign === '-') return [output, String(a - b)];
    return [output, String(a * b)];
  };

  gameRuls(description, lounch);
};

export default brainCalcGame;
