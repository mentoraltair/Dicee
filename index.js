var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var dicee = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", dicee);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dicee = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", dicee);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "✔ Player 1 won!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 won! ✔"
} else {
  document.querySelector("h1").textContent = "✔ It's a draw! ✔"
}
