import  readlineSync from 'readline-sync';
function askName() {
const yourName = readlineSync.question('May I have your name? ');
console.log('Hi, ' + yourName +'!');
}

export { askName };

