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
        document.getElementById(`score--${playerNumber}`).textContent = 0;
        switchPlayer();
    }
    console.log("random = " + random);
    console.log("current = " + current);
    document.getElementById(`current--${playerNumber}`).textContent = current;
    return current;
}
 
const change = switchPlayer();
const currentVal = rollDice();
 
console.log("Final current value = " + currentVal);
 
 
 
let current1 = document.getElementsById('current--0');
let current2 = document.getElementsById('current--1');
let container1 = document.getElementsByClassName('player player--0');
let container2 = document.getElementsByClassName('player player--1');
 
 
var content = document.createElement('h3');
content.classList.add('playerwins' ,'');
container1.appendChild(content);
 
 
  function  switchPlayer() {
  const player1 = document.getElementsByClassName('player player--0')[0];
  const player2 = document.getElementsByClassName('player player--1')[0];
 
 
 
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
 
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
 
 
function hold() {
    let current0 = parseFloat(document.querySelector('#current--0').textContent);
    let current1 = parseFloat(document.querySelector('#current--1').textContent);
    let score0 = parseFloat(document.querySelector('#score--0').textContent);
    let score1 = parseFloat(document.querySelector('#score--1').textContent);
   
    document.getElementById('score--0').textContent = score0 + current0;
    document.getElementById('score--1').textContent = score1 + current1;
   
    switchPlayer();
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