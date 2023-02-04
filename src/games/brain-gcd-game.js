import gameRun from '../index.js';

function brainGcdGame() {
  const description = 'Find the greatest common divisor of given numbers.';
  const question = (rand, rand2) => `Question: ${rand} ${rand2}`;
  const correct = (rand, rand2) => {
    const arr = [rand, rand2];
    let result = 0;
    arr.sort().forEach((el, index) => {
      if (el < arr.at(index - 1)) {
        for (let i = el; i >= 1; i -= 1) {
          if (el % i === 0 && arr.at(index - 1) % i === 0) {
            result = i;
            break;
          }
        }
      }
      if (el === arr.at(index - 1)) result = el;
    });
    return String(result);
  };

  gameRun(description, correct, question);
}

export default brainGcdGame;
