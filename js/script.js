{
let score=0;
let scoreElement=document.getElementById('score')
console.log (scoreElement)

const playGame = function (playerInput){

    clearMessages();

    console.log(playerInput);

    const  getMoveName = function (argMoveId){
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
        let result = 'Przegrywasz';
        const mapMove = {
            papier:'kamień',
            nożyce:'papier',
            kamień:'nożyce',
        };
        if (mapMove[argPlayerMove] == argComputerMove) {
            result = 'Wygrywasz!';
        } else if (argPlayerMove == argComputerMove) {
            result = 'Remis!';
        }
        printMessage(result);

}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);


console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
}
