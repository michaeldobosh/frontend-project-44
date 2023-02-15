import playGames, { random } from '../index.js';

function brainPrimeGame() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = Math.floor(num / 2); i >= 2; i -= 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
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
}

export default brainPrimeGame;
