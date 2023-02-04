import gameRun from '../index.js';

function brainEvenGame() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correct = (rand) => {
    if (rand % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const question = (rand) => `Question: ${rand}`;

  gameRun(description, correct, question);
}

export default brainEvenGame;
