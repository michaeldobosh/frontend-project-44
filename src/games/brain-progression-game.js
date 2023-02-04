import gameRun from '../index.js';

function brainProgressionGame() {
  const description = 'What number is missing in the progression.';
  const random = () => Math.ceil(Math.random() * 10);
  const random2 = () => Math.ceil(Math.random() * 5);
  const progression = (interval) => {
    const numbers = [random()];
    for (let i = 0; i <= 10; i += 1) {
      numbers.push(numbers[i] + interval);
      if (numbers.length >= 5) {
        if (Math.ceil(Math.random() * 4) === 2) break;
      }
    }
    return numbers;
  };
  let outputNum = progression(random2());
  let index = 0;
  let hideNumber = 0;
  const question = () => {
    index = Math.floor(Math.random() * outputNum.length);
    hideNumber = outputNum[index];
    outputNum[index] = '..';
    return `Question: ${outputNum}`;
  };
  const correct = () => {
    outputNum = progression(random2());
    index = Math.floor(Math.random() * outputNum.length);
    return String(hideNumber);
  };

  gameRun(description, correct, question);
}

export default brainProgressionGame;
