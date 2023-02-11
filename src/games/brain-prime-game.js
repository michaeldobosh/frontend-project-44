import gameRun from '../index.js';

function brainPrimeGame() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const listPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  function answer(rand) {
    return listPrimeNumbers.includes(rand) ? 'yes' : 'no';
  }
  const question = (rand) => `Question: ${rand}`;

  gameRun(description, question, answer);
}

export default brainPrimeGame;
