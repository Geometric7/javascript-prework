let score=0;
let scoreElement=document.getElementById('score')
console.log (scoreElement)

function playGame(playerInput){
    clearMessages();

    function getMoveName(argMoveId) {
        if(argMoveId == 1){
            return 'kamień';
        }
        else if (argMoveId == 2){
            return 'papier';
        }
        else if (argMoveId == 3){
            return 'nożyce';
        }
        else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz !');
        }

        /*if(argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    if(argComputerMove == 'kamień' && argPlayerMove =='kamień') || (argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
}
if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
printMessage('Ty przegrywasz!');
}
if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') || (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') || (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
printMessage('Nieznany ruch!');
}*/
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == '1'){
computerMove = 'kamień';
}

if(randomNumber == '2'){
computerMove = 'papier';
}

if(randomNumber == '3'){
computerMove = 'nożyce';
}*/
/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
playerMove = 'kamień';
}

else if(playerInput == '2'){
playerMove = 'papier';
}

else if(playerInput == '3'){
playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);

}

/*if( computerMove == 'kamień' && playerMove == 'papier'){
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
}*/

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
