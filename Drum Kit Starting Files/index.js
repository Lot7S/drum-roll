// addEventListener for playing sound when a buttton is clicked, using switch statement below
var numberOfDrums = document.querySelectorAll("button").length;

for (var k = 0; k < numberOfDrums; k++) {
  document.querySelectorAll("button")[k].addEventListener("click", function () {
  var buttonInnerHTML = this.innerHTML;
  handleClick(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});
}

function handleClick(bomb) {
var drum = new Audio("sounds/" + bomb + ".mp3");
drum.play();
  switch (bomb) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("buttonInnerHTML");

  }

}
// addEventListener using keystrokes and its still drawn from the switch statement above
document.addEventListener("keypress", function(e) {
  handleClick(event.key);
  buttonAnimation(event.key);
});
// to add animation, we create a function for that
function buttonAnimation(currentKey) {
  var pressedKey = document.querySelector("." + currentKey);
  pressedKey.classList.add("pressed");
  setTimeout(function(){
    pressedKey.classList.remove("pressed");
  }, 100);
}
