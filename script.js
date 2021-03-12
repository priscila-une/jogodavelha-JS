var player, winner = null;
var playerSelected = document.getElementById('jogador-selecionado');
var selectedWinner = document.getElementById('vencedor-selecionado');
var square = document.getElementsByClassName('square');

changePlayer('X');

function chooseSquare(id){ 
    if(winner !== null){
        return;
    }
    
    var square = document.getElementById(id);
    if(square.innerHTML !== '-'){
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if(player === 'X'){
        player = 'O';
    } else {
        player = 'X';
    }
    changePlayer(player);
    checkWinner();
}

function changePlayer(valor){
    player = valor;
    playerSelected.innerHTML = player;
}

function checkWinner(){
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if(checkSequence(square1, square2, square3)){
        changeSquareColor(square1, square2, square3);
        changeWinner(square1);
        return;
    } 
    
    if(checkSequence(square4, square5, square6)){
        changeSquareColor(square4, square5, square6);
        changeWinner(square4);
        return;
    } 
    
    if(checkSequence(square7, square8, square9)){
        changeSquareColor(square7, square8, square9);
        changeWinner(square7);
        return;
    } 
    
    
    if(checkSequence(square1, square4, square7)){
        changeSquareColor(square1, square4, square7);
        changeWinner(square1);
        return;
    } 
    
    if(checkSequence(square2, square5, square8)){
        changeSquareColor(square2, square5, square8);
        changeWinner(square2);
        return;
    } 
    
    if(checkSequence(square3, square6, square9)){
        changeSquareColor(square3, square6, square9);
        changeWinner(square3);
        return;
    } 
    
    if(checkSequence(square1, square5, square9)){
        changeSquareColor(square1, square5, square9);
        changeWinner(square1);
        return;
    } 
    
    if(checkSequence(square3, square5, square7)){
        changeSquareColor(square3, square5, square7);
        changeWinner(square3);
        
    } 
}     

function changeWinner(square){
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3){
    square1.style.background = 'purple'
    square2.style.background = 'purple'
    square3.style.background = 'purple'
}

function checkSequence(square1, square2, square3){
    var same = false;
    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        same = true;
    }
    return same;
}

function restart(){
    winner = null;
    selectedWinner.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var square = document.getElementById(i);
        square.style.background = 'rgb(205, 170, 216)';
        square.style.color = 'rgb(205, 170, 216)';
        square.innerHTML = '-';
    }
    changePlayer('X');
}