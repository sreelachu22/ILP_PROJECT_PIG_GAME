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



// const changeBg=()=>{
//     document.body.style.backgroundColor="red";
// }
