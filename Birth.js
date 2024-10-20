document.getElementById("revealBtn").addEventListener("click", function() {
  // Hide heart symbol and reveal the birthday message
  document.getElementById("heart-symbol").style.display = "none";
  document.getElementById("birthdayMessage").style.display = "block";

  // Create balloons after clicking the button
  createBalloons();
});

function createBalloons() {
  const balloonContainer = document.getElementById('balloons');

  for (let i = 0; i < 30; i++) {
    let balloon = document.createElement('div');
    balloon.classList.add('balloons');
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.backgroundColor = getRandomColor();
    balloonContainer.appendChild(balloon);
    document.getElementById("revealBtn").style.display="none";
  }
}

function getRandomColor() {
  const colors = ['#ff4444', '#ffbb33', '#99cc00', '#33b5e5', '#aa66cc'];
  return colors[Math.floor(Math.random() * colors.length)];
}