const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let currentlyPlaying = true;


class Field {
  constructor(hatAndHoles, field){
    this.hatAndHoles = hatAndHoles;
    this.field = field;
  }
  playGame(){
    let x = 0;
    let y = 0;
    this.print(this.field);
  }
ask(){
  let move = prompt('Which direction do you want to move?(u for up, d for down, l for left and r for right)');
  switch(move.toLowerCase()){
    case 'u':
    console.log('Moving up');
    this.y += 1;
    break;
    case 'd':
    console.log('Moving down');
    this.y -= 1;
    break;
    case 'l':
    console.log('Moving left');
    this.x -= 1;
    break;
    case 'r':
    this.x += 1;
    break;
    default:
    break;
  } 
}
checkWin(){
  if (this.field[this.y] === undefined && this.field[this.x] === undefined){
    console.log('You lose (Out of boundary)');
    return currentlyPlaying = false;
  }
  switch(this.field[this.x][this.y]){
    case hole:
    console.log('You lose (You fall into a hole)');
    return currentlyPlaying = false;
    break;
    case undefined:
    console.log('You lose (Out of boundary)')
    break;
    case hat:
    console.log('You win(You found a hat)');
    return currentlyPlaying = false;
    break;
    case fieldCharacter:
    console.log('Continue finding a hat...');
    this.field[this.x][this.y] = pathCharacter;
    break;
    case pathCharacter:
    console.log('You are stepping on *');
    break;
  }
}
static generateField(height, wight, percentage){
  const fieldOrHole = percentage => {
   
    if(percentage >= 0 && percentage <= 100){
       let randomNum = Math.random() * 100;
       if(randomNum < percentage){
         return hole;
       }
       else {
         return fieldCharacter;
       }
    }
    else {
      console.log('Please enter number between 0 and 100')
    }
  } 
}
}
