let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
	computerMove = 'papier';
}

if(randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
	playerMove = 'papier';
}

if(playerInput == '3'){
	playerMove = 'nożyce';
}


printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Przegrywasz!');
}

if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}

if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Wybierz 1, 2 lub 3!');
}
