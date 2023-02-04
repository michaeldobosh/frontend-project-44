import readlineSync from 'readline-sync';

function gameRun(description, correct, question) {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  const gameAnswer = () => {
    console.log(description);
    for (let i = 0; i < 3; i += 1) {
      const rand = [];
      for (let j = 0; j < 2; j += 1) {
        rand.push(Math.ceil(Math.random() * 50));
      }
      console.log(question(...rand));
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = correct(...rand);
      if (answer === correctAnswer) {
        console.log('Correct!');
        if (i === 2) console.log(`Congratulations, ${yourName}!`);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${yourName}!`);
        break;
      }
    }
  };

  gameAnswer();
}

export default gameRun;
