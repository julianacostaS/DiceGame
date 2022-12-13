var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generate a random number between 0 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //get the image dice1.png - dice6.png randomly

var randomImageSource = "images/" + randomDiceImage; //get the folder images inside src

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//dice 2 using less lines of code
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//change title according to game result

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";

} else {
    document.querySelector("h1").innerHTML = "🏁 It's a draw!"
}