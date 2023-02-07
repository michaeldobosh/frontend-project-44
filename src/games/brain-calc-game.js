import gameRun from '../index.js';

const description = 'What is the result of the expression?';
const sign = () => ['+', '-', '*'][Math.floor(Math.random() * 3)];
let getSign = sign();
const operation = (a, b) => {
  if (getSign === '+') return { question: `Question: ${a} + ${b}`, answer: String(a + b) };
  if (getSign === '-') return { question: `Question: ${a} - ${b}`, answer: String(a - b) };
  return { question: `Question: ${a} * ${b}`, answer: String(a * b) };
};
const correct = (rand, rand2) => {
  const result = operation(rand, rand2);
  getSign = sign();
  return result.answer;
};
const question = (rand, rand2) => operation(rand, rand2).question;

const brainCalcGame = () => gameRun(description, correct, question, sign);

export default brainCalcGame;
