import playGames, { random } from '../index.js';

const brainProgressionGame = () => {
  const description = 'What number is missing in the progression.';
  const progression = (interval) => {
    const numbers = [random(4, 10)];
    for (let i = 0; i <= numbers[0]; i += 1) {
      numbers.push(numbers[i] + interval);
    }
    return numbers;
  };
  const getAnswer = (numbers, index) => String(numbers[index]);
  const gameRuls = () => {
    let raunds = 0;
    const answers = [];
    const questions = [];
    while (raunds < 3) {
      const numbers = progression(random(1, 5));
      const hiddenNum = random(0, numbers.length - 1);
      answers.push(getAnswer(numbers, hiddenNum));
      numbers[hiddenNum] = '..';
      questions.push(`${numbers.join(' ')}`);
      raunds += 1;
    }
    return [questions, answers, raunds];
  };

  playGames(description, gameRuls);
};

export default brainProgressionGame;
