import playGames, { random } from '../index.js';

const brainCalcGame = () => {
  const description = 'What is the result of the expression?';
  const getAnswer = (operator, a, b) => {
    if (operator === '+') return String(a + b);
    if (operator === '-') return String(a - b);
    return String(a * b);
  };
  const gameRuls = () => {
    let raunds = 0;
    const answers = [];
    const questions = [];
    while (raunds < 3) {
      const sign = ['+', '-', '*'][random(0, 3)];
      const [a, b] = [random(1, 50), random(1, 50)];
      answers.push(getAnswer(sign, a, b));
      questions.push(`${a} ${sign} ${b}`);
      raunds += 1;
    }
    return [questions, answers, raunds];
  };

  playGames(description, gameRuls);
};

export default brainCalcGame;
