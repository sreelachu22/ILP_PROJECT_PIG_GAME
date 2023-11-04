const switchPlayer = function () {
  const player1 = document.getElementsByClassName('player player--0')[0];
  const player2 = document.getElementsByClassName('player player--1')[0];

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
