//---------- VARIABLES ----------

var board = ["", "", "", "", "", "", "", "", ""];
var playerTime = 0;

var symbols = ["o", "x"];
let gameOver= false;

//---------- CHANGE PLAYER ----------

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == "") {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {

            playerTime = (playerTime == 0) ? 1 : 0;
        }
        
    }
    return gameOver;
}

//---------- RESULT CHECK ----------

function isWin() {
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    for (i=0; i< winStates.length; i++) {

        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != "") {

                return  true;

        }else if (board[0] != ""
            && board[1] != "" 
            && board[2] != "" 
            && board[3] != "" 
            && board[4] != "" 
            && board[5] != "" 
            && board[6] != "" 
            && board[7] != "" 
            && board[8] != "") {
                
            setTimeout(() => {restartGame()}, 900)
                
         }
    }
    return false;
}    