<<<<<<< HEAD
=======
//get active player number
function getActivePlayer() {
    const player0 = document.getElementsByClassName('player player--0')[0];
    const player1 = document.getElementsByClassName('player player--1')[0];
 
    if (player0.classList.contains('player--active')) {
        return 0;
    } else if (player1.classList.contains('player--active')) {
        return 1;
    } else {
        return -1;
    }
}

//new game button function
function reset()
{
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    const diceImage = document.querySelector(".dice");
    const imageName = ``;
    diceImage.src = imageName;
}

//rollDice function
>>>>>>> fa26096204c7ca537383dba4ae094977cab382f2
let current = 0;

function rollDice() {
    const playerNumber = getActivePlayer();
    const random = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.querySelector(".dice");
    const imageName = `dice-${random}.png`;
    diceImage.src = imageName;
    if (random !== 1) {
        current = current + random;
    } else {
        current = 0;
        document.getElementById(`current--${playerNumber}`).textContent = current;
        switchPlayer();
    }
    console.log("random = " + random);
    console.log("current = " + current);
    document.getElementById(`current--${playerNumber}`).textContent = current;
    return current;
}


//winner
let current1 = document.getElementsById('current--0');
let current2 = document.getElementsById('current--1');
let container1 = document.getElementsByClassName('player player--0');
let container2 = document.getElementsByClassName('player player--1');

var content = document.createElement('h3');
content.classList.add('playerwins' ,'');
container1.appendChild(content);

//switch between players
  function  switchPlayer() {
  const player1 = document.getElementsByClassName('player player--0')[0];
  const player2 = document.getElementsByClassName('player player--1')[0];
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//hold function
function hold() {
    let current0 = parseFloat(document.querySelector('#current--0').textContent);
    let current1 = parseFloat(document.querySelector('#current--1').textContent);
    let score0 = parseFloat(document.querySelector('#score--0').textContent);
    let score1 = parseFloat(document.querySelector('#score--1').textContent);
    document.getElementById('score--0').textContent = score0 + current0;
    document.getElementById('score--1').textContent = score1 + current1;

    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    switchPlayer();
<<<<<<< HEAD

    current=0;
    currentVal=0;
  }

function reset()
{
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    const diceImage = document.querySelector(".dice");
    const imageName = ``;
    diceImage.src = imageName;

    current=0;
    currentVal=0;
}

function getActivePlayer() {
    const player0 = document.getElementsByClassName('player player--0')[0];
    const player1 = document.getElementsByClassName('player player--1')[0];
 
    if (player0.classList.contains('player--active')) {
        return 0;
    } else if (player1.classList.contains('player--active')) {
        return 1;
    } else {
        return -1;
    }
}
=======
  }
>>>>>>> fa26096204c7ca537383dba4ae094977cab382f2
