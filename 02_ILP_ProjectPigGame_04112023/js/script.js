let player1=prompt("Enter the name of player 1");
let player2=prompt("Enter the name of player 2");

console.log(player1);
console.log(player2);

let hasPlayerWon = false;

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
    const popup = document.getElementById('popup');
    if (popup) {
        popup.remove();
        hasPlayerWon = false;
    }
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    const diceImage = document.querySelector(".dice");
    const imageName = ``;
    diceImage.src = imageName;

    current=0;
    currentVal=0;

    let player1=prompt("Enter the name of player 1");
    let player2=prompt("Enter the name of player 2");
}

let current = 0;

function rollDice() {
    if(hasPlayerWon){
        return;
    }
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
    if(hasPlayerWon){
        return;
    }
    let current0 = parseFloat(document.querySelector('#current--0').textContent);
    let current1 = parseFloat(document.querySelector('#current--1').textContent);
    let score0 = parseFloat(document.querySelector('#score--0').textContent);
    let score1 = parseFloat(document.querySelector('#score--1').textContent);
    document.getElementById('score--0').textContent = score0 + current0;
    document.getElementById('score--1').textContent = score1 + current1;

    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    if(score0 + current0 >=50){
        congratulatePlayer(0)
    } else if(score1 + current1 >=50){
        congratulatePlayer(1)
    }
    switchPlayer();

    current=0;
    currentVal=0;
  }


//winner displaying
function congratulatePlayer(activePlayer) {
    if(activePlayer==0)
    {
        const congratsMessage = `Congratulations, ${player1}!`;
        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.className = 'popup';
        popup.textContent = congratsMessage;
        popup.style.top = '47%';
        popup.style.backgroundColor = 'rgba(255, 255, 255, 0.568)';
        popup.style.position = 'absolute';
        popup.style.padding = '15px';
        popup.style.fontSize = '40px';
        popup.style.border = '3px solid #c7365f';
        popup.style.borderRadius = '100px'
        popup.style.textAlign = 'center';
        popup.style.zIndex = '99';
        popup.style.animation = 'sparkle 0.8s infinite';
        document.body.appendChild(popup);
        hasPlayerWon = true;
    }
    else if(activePlayer==1)
    {
        const congratsMessage = `Congratulations, ${player2}!`;
        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.className = 'popup';
        popup.textContent = congratsMessage;
        popup.style.top = '47%';
        popup.style.backgroundColor = 'rgba(255, 255, 255, 0.568)';
        popup.style.position = 'absolute';
        popup.style.padding = '15px';
        popup.style.fontSize = '40px';
        popup.style.border = '3px solid #c7365f';
        popup.style.borderRadius = '100px'
        popup.style.textAlign = 'center';
        popup.style.zIndex = '99';
        popup.style.animation = 'sparkle 0.8s infinite';
        document.body.appendChild(popup);
        hasPlayerWon = true;
    }
}