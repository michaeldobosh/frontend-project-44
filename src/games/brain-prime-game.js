import gameRuls from '../index.js';

function brainPrimeGame() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = Math.floor(num / 2); i >= 2; i -= 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const lounch = (num) => [`Question: ${num}`, (isPrime(num) ? 'yes' : 'no')];

  gameRuls(description, lounch);
}

export default brainPrimeGame;
