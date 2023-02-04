import readlineSync from 'readline-sync';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  return yourName;
}

export default greetings;
