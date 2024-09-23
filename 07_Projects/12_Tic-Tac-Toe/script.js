const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newBtn = document.querySelector(".btn");

let currPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Function to initialize the game
function initGame() {
    currPlayer = 'X';
    gameGrid = ["","","","","","","","",""];
    // clearing the UI
    boxes.forEach( (box) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
        box.classList.remove("win");
    });
    newBtn.classList.remove('active');
    gameInfo.innerText = `Current Player - ${currPlayer}`;
}
initGame();

function swapTurn() {
    if (currPlayer === 'X') {
        currPlayer = 'O';
    } else {
        currPlayer = 'X';
    }
    gameInfo.innerText = `Current Player - ${currPlayer}`;
}

function handleClick(idx) {
    if (gameGrid[idx] === "") {
        gameGrid[idx] = currPlayer;
        boxes[idx].innerText = `${currPlayer}`;
        boxes[idx].style.pointerEvents = "none";
        swapTurn();
        checkGameOver();
    }
}

boxes.forEach((box, idx) => {
    box.addEventListener('click', function () {
        handleClick(idx);
    })
});

function checkGameOver() {
    let ans = "";

    winningPositions.forEach( (position) => {
        if ((gameGrid[position[0]] !== "" && gameGrid[position[1]] !== "" && gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
                
                if (gameGrid[position[0]] === 'X') {
                    ans = 'X';
                } else {
                    ans = 'O';
                }

                // Marking the winning Positions
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");  
                
                // disabling pointer event
                boxes.forEach( (box) => {
                    box.style.pointerEvents = "none";
                });
        }
    })
    
    if (ans !== "") { // if we find a winner
        gameInfo.innerText = `Winner Player - ${ans}`;
        newBtn.classList.add("active");
    } 

    // When game is tied
    else {
        let flag = true;
        // checking if there is a empty position
        for (const box of gameGrid) {
            if (box === "") {
                flag = false;
                break;
            }
        }
        if (flag) {
            gameInfo.innerText = `Game Tied !`
            newBtn.classList.add("active");
        }
    }
    return;
}

newBtn.addEventListener('click', initGame);