//Create an array of random words
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

//Display unerscores in game
document.getElementById("underScores").innerHTML = answers;

//Prompt player to guess a letter

//Check to see if player guess is correct

//Prevent player guess of same letter twice

//If player guess is correct, put the letter in the index place of corresponding underscore

//If player guess is not correct, put letter in letters guessed area and subtract 1 from guesses remaining

//If player completes the entire word add 1 to wins and restart game

//If guesses remaining reaches zero and word is not complete then add 1 to losses and restart game

//Display letters guessed in the game so far

//Disply guesses remaining
document.getElementById("lettersRem").innerHTML = remainingLetters;