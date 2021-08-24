var randomNumber1 = Math.floor((Math.random() * 6) + 1); // 1 - 6

var randomImg = 'images/' + randomNumber1 + '.png'; // files directory to chose random image

document.querySelector(".img1").setAttribute("src", randomImg); // change attribute src to the random image selected

var randomNumber2 = Math.floor((Math.random() * 6) + 1); // 1 - 6

var randomImg2 = 'images/' + randomNumber2 + '.png'; // files directory to chose random image

document.querySelector(".img2").setAttribute("src", randomImg); // change attribute src to the random image selected

if (randomNumber1 > randomNumber2) {    // if statement to show who won
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Its a Draw!"
};