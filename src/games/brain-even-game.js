import gameRuls from '../index.js';

const brainEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (num) => num % 2 === 0;
  const lounch = (num) => [`${num}`, (isEven(num) ? 'yes' : 'no')];

  gameRuls(description, lounch);
};

export default brainEvenGame;
