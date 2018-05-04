//Create an array of random words
var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0;
var words = ["lannister", "stark", "targaryan", "baratheon", "snow", "winterfell", "westeros",
"aemon", "joffrey", "robert", "stannis", "bolton", "ramsay", "greyjoy", "cersei", "jaime", "tyrion",
"mormont", "sansa", "arya", "eddard", "rhaegar", "daenerys", "brienne", "highgarden"];
//Create a function that will select the random word for the game
var randomWord = words[Math.floor(Math.random() * words.length)];
//Generate underscroes corresponding to the length of the random word chosen
var answers = [];
for (var i = 0; i < randomWord.length; i++) {
    answers[i] = "_";
}
//Keep track of letters left to be guessed
var remainingLetters = randomWord.length;

//Display underscores in game
document.getElementById("underScores").innerHTML = answers;

//Player guess
/*document.onkeyup = function(event) {
var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
if (playerGuess) < 0 && words.indexOf(randomWord) >= 0) {
    lettersGuessed[lettersGuessed.length]=playerGuess;
    guessesLeft--;
}
//Check to see if player guess is correct
if (playerGuess.indexOf(playerGuess) === 0 && words.indexOf(randomWord) >= 0) {
    guessesLeft--;
    lettersGuessed = [];
    playerGuess = randomWord[Math.floor(Math.random() * alphabet.length)];
}
//Check to see if player guess is wrong
if (playerGuess < 0) {
    guessesLeft --;
    lettersGuessed = [];
    randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

//Prevent player guess of same letter twice

//If player guess is correct, put the letter in the index place of corresponding underscore

//If player guess is not correct, put letter in letters guessed area and subtract 1 from guesses left

//If player completes the entire word add 1 to wins and restart game

//If guesses left reaches zero and word is not complete then restart game

//Display letters guessed in the game so far
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;*/

//Display guesses left
document.getElementById("lettersRem").innerHTML = guessesLeft;

//Display player wins
var htmlWins = "<p>Player Wins: " + wins + "</p>"
document.querySelector("#wins").innerHTML = htmlWins;