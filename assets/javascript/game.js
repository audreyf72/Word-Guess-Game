//Generate random words
var words = [
    "beach",
    "mountain",
    "bicycle",
    "swimming",
    "waterslide",
    "playground",
    "tennis",
    "volleyball"];

var underScores = [];

for (var i = 0; i < random.length; i++){
    var random = random[Math.floor(Math.random() * words.length)];
    var underScoresRem = random.length;
    underScores[i] = "_";
}

while (underScoresRem > 0) {
    
alert(underScores.join(" "));

var playerGuess = prompt("Guess a letter");
    if (guess === null){
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else{
        for (var j = 0; j < random.length; j++){
            if (random[j] === playerGuess) {
                underScores[j] = guess;
                underScoresRem--;
        }
    }
    };




