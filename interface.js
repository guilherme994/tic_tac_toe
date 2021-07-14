//---------- VARIABLES ----------

let player1 = document.getElementById("resPlayer-1")
let player2 = document.getElementById("resPlayer-2")

let resPlayer1 = 0
let resPlayer2 = 0

player1.innerHTML = resPlayer1
player2.innerHTML = resPlayer2

//---------- CLICK EVENT ----------

document.addEventListener('DOMContentLoaded', () => {

    let blocks = document.querySelectorAll(".block");

    blocks.forEach((block)=> {
        block.addEventListener("click", handleClick);
    })
})

//---------- RESULT COUNTER ----------

function handleClick(event) {
    let block = event.target;
    let position = block.id;

    if (handleMove(position)) {
        setTimeout(() => {
            restartGame()
        }, 700);

        if (gameOver == true && playerTime == 0){
            let res1 = resPlayer1 + 1
            resPlayer1 = res1
            player1.innerHTML = res1
        } else if(gameOver == true && playerTime == 1){
            let res2 = resPlayer2 + 1
            resPlayer2 = res2
            player2.innerHTML = res2
        }
    }

    updateBlock(position);
}

//---------- INSERT THE SYMBOLS ----------

function updateBlock(position) {
    let block = document.getElementById(position.toString());
    let symbol = board[position];
    block.innerHTML = `<div class='${symbol}'></div>`
}

//---------- INSERT THE SYMBOLS ----------

function removeBlocks() {
    document.querySelectorAll('.x').forEach(e => e.remove());
    document.querySelectorAll('.o').forEach(e => e.remove());
}

//---------- RESET GAME ----------

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver= false;

    removeBlocks()
}

//---------- RESET SCORE ----------

function scoreReset() {
    resPlayer1 = 0
    resPlayer2 = 0
    player1.innerHTML = resPlayer1
    player2.innerHTML = resPlayer2
}

