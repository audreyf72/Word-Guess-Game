//Create an array of random words
var words = ["joffrey", "robert", "jon", "margaery", "theon", "cersei", "jaime", "tyrion",
"sansa", "arya", "ygritte", "daenerys", "brienne", "catelyn", "melissandre", "littlefinger", "varys"];

//Create variables for Letters Guessed, Guesses Left and Player Wins
var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0;
var playerGuess = event;
var wordPic = "Valar Morghulis";

//Create a function that will select the random word for the game
var randomWord = words[Math.floor(Math.random() * words.length)];

//Generate underscores corresponding to the length of the random word chosen
var answers = [];
for (var i = 0; i < randomWord.length; i++) {
    answers[i] = "_";
}
console.log(randomWord);

//Keeps track of letters left to be guessed
var remainingLetters = randomWord.length;

//Display underscores in game (Result? Underscores display with the correct number of spaces for the randomWord but doesn't look right)
document.getElementById("underScores").innerHTML = answers;
console.log(answers);

//Player guess
// Determines which key was pressed (This is where I got stuck and couldn't figure out how to fix code beyond this point)
document.onkeyup = function (event) {
    var playerGuess = String.fromCharCode(event.onkeyup).toLowerCase();

//Check to see if player guess is correct
    if (playerGuess.indexOf(randomWord) > -1) {
        document.getElementById(lettersGuessed).innerHTML += playerGuess;

//If player guess is correct, put the letter in the index place of corresponding underscore        
        var targetDiv = document.getElementById("underScores");
        targetDiv.textContent = "";
        var newDiv = document.createElement("div");
        newDiv.textContent = playerGuess;
        
//If player completes the entire word add 1 to wins, change image, image title, and restart game        
        wins ++;
        guessesLeft--;
        lettersGuessed = [];
        if (wins == 6) {
            inititalizGame();
        }
//Check to see if player guess is wrong    
//If player guess is not correct, put letter in letters guessed area and subtract 1 from guesses left    
    } else {
        lettersGuessed = [];
        guessesleft--;

//If guesses left reaches zero and word is not complete then restart game        
        if (guessesLeft == 0) {
            inititalizGame();
        } else {
            document.getElementById(lettersGuessed).innerHTML += playerGuess;
            var targetDiv = document.getElementById("lettersGuessed");
            targetDiv.textContent = "";
            var newDiv = document.createElement("div");
            newDiv.textContent = playerGuess;
        }

    }
}
//Prevent player guess of same letter twice

//Display letters guessed in the game so far
var lettersGuessed = document.getElementById("lettersGuessed");
lettersGuessed.textContent = lettersGuessed;

//Display guesses left
document.getElementById("lettersRem").innerHTML = guessesLeft;

//Display player wins
var htmlWins = "<p>Player Wins: " + wins + "</p>"
document.querySelector("#wins").innerHTML = htmlWins;

var wordPicHTML = "<p>" + wordPic + "</p>"
document.querySelector("#wordpicTitle").innerHTML = wordPicHTML;