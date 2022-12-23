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
const messageEl = document.querySelector('h1');
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
  renderMessage();
  renderBoard();
  renderControls();
}

function renderBoard() {
  gameBoard.forEach(function (celVal, celIndex) {
    const squareEl = document.getElementById(`cl-${celIndex}`);
    // squareEl.style.backgroundColor = playCOL[celVal];
    //changing x O color 
    squareEl.style.color = textColor[celVal];
    //adding x and o
    squareEl.innerHTML = playCOL[celVal];
    // Add class if square available for hover effect
    squareEl.className = !celVal ? 'avail' : '';
  });
}

function renderMessage() {
  (winner === 'T') ? messageEl.innerText = 'Tie'
    : (winner) ? messageEl.innerHTML = `<span style="color: ${textColor[winner]}">${textColor[winner]
      .toUpperCase()}</span> Wins!` :
      //turn is in play
      messageEl.innerHTML = `<span style="color: ${textColor[turn]}">${textColor[turn]
        .toUpperCase()}</span>'s Turn`;
}

function renderControls() {
  playBtn.style.visibility = winner ? 'visible' : 'hidden';
}