var words = ["beach", "mountain", "rollercoaster", "pool", "waterslide", "playground", "tennis", "volleyball"];
var randomNum = [Math.floor(Math.random() * words.length)];
var wordChoice = words[randomNum];
var guessWord = [];
var wins = 0;
var wrong = [];


var showUnderscore = () => {
    for(var i = 0; i < wordChoice.length; i++){
        guessWord.push('_');
    }
    return guessWord;
}

document.onkeyup= function(event) {
    var playerGuess = event.key;
    var playerLetter = String.fromCharCode(event.playerGuess);
};

if (playerLetter.indexOf(wordChoice) > -1) {

}




/*
var guessRemaining =0;
var lettersGuessed = userGuess;

document.onkeyup = function(event) {
    var userGuess = event.key;

    var html =
        "<p>wins: " + wins + "</p>" +
        "<p>guesses remaining: " + (lettersGuessed + wins) + "</p>" +
        "<p>letters guessed: " + lettersGuessed + "</p>";


    document.querySelector(".gameStart").innerHTML = html;
}*/