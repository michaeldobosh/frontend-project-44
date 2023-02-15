import playGames, { random } from '../index.js';

const brainEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (num) => num % 2 === 0;
  const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');
  const gameRuls = () => {
    let raunds = 0;
    const answers = [];
    const questions = [];
    while (raunds < 3) {
      const number = [random(1, 50)];
      answers.push(getAnswer(number));
      questions.push(`${number}`);
      raunds += 1;
    }
    return [questions, answers, raunds];
  };
  playGames(description, gameRuls);
};

export default brainEvenGame;
