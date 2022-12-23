/*-- constants --*/
const playCOL = {
    'null': '',
    '1': 'X',
    '-1': 'O',
}

const textColor = {
    'null': '#F2E8CF',
    '1': 'red',
    '-1': 'blue',
}

const winState = [
    //row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //col
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6]
];
/*-- state variables  --*/
let gameBoard; // array of 3 column array
let turn; // 1 or -1
let winner; //null - no winner; 1 or -1 winner; 'T' - tie

/*--  cached elements --*/
const messageEL = document.querySelector('h1');
const playBtn = document.querySelector('button');
//shortcut for messageEl


/*--  event listeners --*/
//start game again
playBtn.addEventListener('click', init);
document.getElementById('cells').addEventListener('click', handleClick);
/*-- functions  --*/
init();

function init() {
    gameBoard = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

function handleClick(event) {
    //find value been clicked by user
    // const index = parseInt(event.target.id.replace('cl-', ''));
    const index = parseInt(event.target.id[3]);
    // console.log(index)
    if (isNaN(index) || gameBoard[index] || winner) return;
    gameBoard[index] = turn;
    turn *= -1;
    winner = checkWinner();
    render();
}

function checkWinner() {
    for (let i = 0; i < winState.length; i++) {
        if (Math.abs(gameBoard[winState[i][0]] +
            gameBoard[winState[i][1]] +
            gameBoard[winState[i][2]]) === 3)
            return gameBoard[winState[i][0]];
    }
    if (gameBoard.includes(null)) return null;
    return 'T';
}


function render() {
    
}


