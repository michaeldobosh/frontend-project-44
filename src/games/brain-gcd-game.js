import gameRun from '../index.js';

function brainGcdGame() {
  const description = 'Find the greatest common divisor of given numbers.';
  const question = (rand, rand2) => `Question: ${rand} ${rand2}`;
  const answer = (rand, rand2) => {
    let data = [rand, rand2].sort();
    for (let i = data[0]; i >= 1; i -= 1) {
      if (data[0] % i === 0 && data[1] % i === 0) {
        data = String(i);
      }
    }
    return data;
  };

  gameRun(description, question, answer);
}

export default brainGcdGame;
