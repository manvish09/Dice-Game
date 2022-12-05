/* Player 1 number gets decided here */
var randomNumber1 = Math.round(Math.random()*5)+1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage1);

/* Player 2 number gets decided here*/
var randomNumber2 = Math.round(Math.random()*5)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randomDiceImage2);

/* The heading is changed here i.e if the player1 wins or the player2 wins*/
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!🚩";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else{
    document.querySelector("h1").innerHTML = "Player2 wins!🚩";
}