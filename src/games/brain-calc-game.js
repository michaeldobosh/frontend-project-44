import playGames from '../index.js';
import random from '../random.js';

const description = 'What is the result of the expression?';
const signs = '+-*';
const calc = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    default:
      return String(number1 * number2);
  }
};
const dataOfRound = () => {
  const result = {
    sign: signs[random(0, 3)],
    num1: random(1, 50),
    num2: random(1, 50),
  };
  const question = `${result.num1} ${result.sign} ${result.num2}`;
  const answer = calc(result.sign, result.num1, result.num2);
  return [question, answer];
};

export default () => playGames(description, dataOfRound);
