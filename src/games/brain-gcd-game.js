import playGames, { random } from '../index.js';

function brainGcdGame() {
  const description = 'Find the greatest common divisor of given numbers.';
  const getDivisor = (num, num2) => {
    if (num > num2) return getDivisor(num - num2, num2);
    return num < num2 ? getDivisor(num, num2 - num) : String(num);
  };
  const getAnswer = (num, num2) => getDivisor(num, num2);

  const gameRuls = () => {
    let raunds = 0;
    const answers = [];
    const questions = [];
    while (raunds < 3) {
      const [a, b] = [random(1, 50), random(1, 50)];
      answers.push(getAnswer(a, b));
      questions.push(`${a} ${b}`);
      raunds += 1;
    }
    return [questions, answers, raunds];
  };

  playGames(description, gameRuls);
}

export default brainGcdGame;
