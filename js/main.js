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


//shortcut for messageEL

/*--  event listeners --*/
//start game again

/*-- functions  --*/
init();







