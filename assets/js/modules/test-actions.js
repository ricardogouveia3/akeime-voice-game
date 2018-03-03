/* Global Variables */
var ball = document.getElementById("testBall");

/* Jump */
function jump() {
  ball.classList.add("action__jump");

  setTimeout(function(){
    ball.classList.remove("action__jump");
  }, 1500);
}

/* Walk Left */
function walkLeft() {
  ball.classList.add("action__walk-left");

  setTimeout(function(){
    ball.classList.remove("action__walk-left");
  }, 4000);
}

/* Walk Right */
function walkRight() {
  ball.classList.add("action__walk-right");

  setTimeout(function(){
    ball.classList.remove("action__walk-right");
  }, 4000);
}
