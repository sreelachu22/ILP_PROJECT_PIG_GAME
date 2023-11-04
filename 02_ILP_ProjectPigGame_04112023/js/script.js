
//Ashiq
let current = 0;

function rollDice() {
    const random = Math.floor(Math.random() * 6) + 1;
    if (random !== 1) {
        current = current + random;
    } else {
        current = 0;
        switchPlayer();
    }
    console.log("random = " + random);
    console.log("current = " + current);
    document.getElementById("current--0").textContent = current;
    return current;
}

const change = switchPlayer();
const currentVal = rollDice();

console.log("Final current value = " + currentVal);

//nathaniel
const switchPlayer = function () {
    const player1 = document.getElementsByClassName('player player--0')[0];
    const player2 = document.getElementsByClassName('player player--1')[0];
   
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  };

//sreelakshmi
function hold(){
    let current0 = document.querySelector('current--0');
    let current1 = document.querySelector('current--1');
    let score0 = document.querySelector('score--0');
    let score1 = document.querySelector('score--1');
    document.getElementById('score--0').textContent = score0 + current0;
    console.log(score0)
    document.getElementById('score--1').textContent = score1 + current1;
    switchPlayer()
}

