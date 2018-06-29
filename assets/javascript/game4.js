

// Creating a giant wordGuessGame object that will house all of our logic and variables.
var wordGuessGame = {

    // Object of all words that can be chosen, along with info such as their picture and a house clip.
  wordsToPick: {
    arya: {
      picture: "arya.jpg",
      house: "Stark",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e3_hate_them.wav"
    },
    brienne: {
      picture: "brienne.jpg",
      house: "Tarth",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e5_courage.wav"
    },
    catelyn: {
      picture: "catelyn.jpg",
      house: "Stark/Tully",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e1_done_well.wav"
    },
    cersei: {
      picture: "cersei.jpg",
      house: "Lannister",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e7_win_or_die.wav"
    },
    daenerys: {
      picture: "daenerys.jpg",
      house: "Targaryan",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e6_fire_cannot.wav"
    },
    hodor: {
      picture: "hodor.jpg",
      house: "Stark",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e4_hodor.wav"
    },
    jaime: {
      picture: "jaime.jpg",
      house: "Lannister",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e8_boring.wav"
    },
    jon: {
      picture: "jon.jpg",
      house: "Stark",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e4_defend_self.wav"
    },
    joffrey: {
      picture: "joffrey.jpg",
      house: "Baratheon",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e8_smile.wav"
    },
    stannis: {
      picture: "stannis.jpg",
      house: "Baratheon",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e5_hard_truths.wav"
    },
    littlefinger: {
      picture: "littlefinger.jpg",
      house: "None",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e1_family.wav"
    },
    margaery: {
      picture: "margaery.jpg",
      house: "Tyrell",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e3_games.wav"
    },
    melissandre: {
      picture: "melissandre.jpg",
      house: "Red Priestess",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e1_night_is_dark.wav"
    },
    robert: {
      picture: "robert.jpg",
      house: "Baratheon",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e5_being_king.wav"
    },
    theoron: {
      picture: "theoron.jpg",
      house: "Greyjoy",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e10_done_a_lot.wav"
    },
    bronn: {
      picture: "bronn.jpg",
      house: "None",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s2e9_plenty.wav"
    },
    sansa: {
      picture: "sansa.jpg",
      house: "Stark",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e1_please.wav"
    },
    tyrion: {
      picture: "tyrion.jpg",
      house: "Lannister",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e5_pays_his_debts.wav"
    },
    varys: {
      picture: "varys.jpg",
      house: "None",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e8_wisdom.wav"
    },
    eddard: {
      picture: "ned.jpg",
      house: "Stark",
      preview: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/tv/game_of_thrones/got_s1e3_winter_coming3.wav"
    }
  },
  
    // Variables that set the initial state of our wordGuess game.
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,
    
  
    // The setupGame method is called when the page first loads.
    setupGame: function() {
      // Here we pick a random word.
      var objKeys = Object.keys(this.wordsToPick);
      this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
  
      // Split the chosen word up into its individual letters.
      this.lettersOfTheWord = this.wordInPlay.split("");
      // Builds the representation of the word we are trying to guess and displays it on the page.
      // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
      this.rebuildWordView();
      // This function sets the number of guesses the user gets, and renders it to the HTML.
      this.processUpdateTotalGuesses();
      console.log(this.wordInPlay);
    },
  
    // This function is run whenever the user guesses a letter..
    updatePage: function(letter) {
      // If the user has no guesses left, restart the game.
      if (this.guessesLeft === 1) {

        var modal3 = document.getElementById('myModal3');
        var span = document.getElementsByClassName("close3")[0];

        modal3.style.display = "block";

        span.onclick = function() {
          modal3.style.display = "none";
      }
        window.onclick = function(event) {
          if (event.target == modal3) {
              modal3.style.display = "none";
          }
      }
        
        this.restartGame();
      }
      // Otherwise...
      else {
        // Check for and handle incorrect guesses.
        this.updateGuesses(letter);
  
        // Check for and handle correct guesses.
        this.updateMatchedLetters(letter);
  
        // Rebuild the view of the word. Guessed letters are revealed, non-guessed letters have a "_".
        this.rebuildWordView();
  
        // If the user wins, restart the game.
        if (this.updateWins() === true) {
          this.restartGame();
        }
      }
  
    },
  
    // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
    updateGuesses: function(letter) {
      // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
      if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
  
        // Add the letter to the guessedLetters array.
        this.guessedLetters.push(letter);
  
        // Decrease guesses by one.
        this.guessesLeft--;
  
        // Update guesses remaining and guesses letters on the page.
        document.querySelector("#lettersRem").innerHTML = this.guessesLeft;
        document.querySelector("#lettersGuessed").innerHTML =
        this.guessedLetters.join(", ");
      }
    },
  
    // This function sets the initial guesses the user gets.
    processUpdateTotalGuesses: function() {
      // The user will get more guesses the longer the word is.
      this.totalGuesses = this.lettersOfTheWord.length + 3;
      this.guessesLeft = this.totalGuesses;
  
      // Render the guesses left to the page.
      document.querySelector("#lettersRem").innerHTML = this.guessesLeft;
    },
  
    // This function governs what happens if the user makes a successful guess.
    updateMatchedLetters: function(letter) {
      // Loop through the letters of the "solution".
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
          // Push the newly guessed letter into the matchedLetters array.
          this.matchedLetters.push(letter);
        }
      }
    },
  
    // This function builds the display of the word that is currently being guessed.
    // For example, if we are trying to guess "blondie", it might display "bl_ndi_".
    rebuildWordView: function() {
      // We start with an empty string.
      var wordView = "";
  
      // Loop through the letters of the word we are trying to guess..
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        // If the current letter has been guessed, display that letter.
        if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
          wordView += this.lettersOfTheWord[i];
        }
        // If it hasn't been guessed, display a "_" instead.
        else {
          wordView += "&nbsp;_&nbsp;";
        }
      }
  
      // Update the page with the new string we built.
      document.querySelector("#underScores").innerHTML = wordView;
    },
  
    // Function that "restarts" the game by resetting all of the variables.
    restartGame: function() {
      document.querySelector("#lettersGuessed").innerHTML = "";
      this.wordInPlay = null;
      this.lettersOfTheWord = [];
      this.matchedLetters = [];
      this.guessedLetters = [];
      this.guessesLeft = 0;
      this.totalGuesses = 0;
      this.letterGuessed = null;
      this.setupGame();
      this.rebuildWordView();
    },
  
    // Function that checks to see if the user has won.
    updateWins: function() {
      var win;
  
      // this won't work for words with double or triple letters
      // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
      // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')
  
      // If you haven't correctly guessed a letter in the word yet, we set win to false.
      if (this.matchedLetters.length === 0) {
        win = false;
      }
      // Otherwise, we set win to true.
      else {
        win = true;
      }
  
      // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
      // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
          win = false;
        }
      }
  
      // If win is true...
      if (win) {
        // Increment wins.
        this.wins = this.wins + 1;

        var modal2 = document.getElementById('myModal2');
        var span = document.getElementsByClassName("close2")[0];

        modal2.style.display = "block";

        span.onclick = function() {
          modal2.style.display = "none";
      }
        window.onclick = function(event) {
          if (event.target == modal2) {
              modal2.style.display = "none";
          }
      }
  
        // Update wins on the page.
        document.querySelector("#wins").innerHTML = "<p>Player Wins: " + this.wins + "</p>";
  
        // Update the character info on the page.
        document.querySelector("#wordpicTitle").innerHTML = this.wordInPlay;
        document.querySelector("#houseTitle").innerHTML = "House Affiliation: " + this.wordsToPick[this.wordInPlay].house;
  
        // Update the image of the character on the page.
        document.querySelector("#wordpic").innerHTML =
          "<img class='character' src='assets/images/" +
          this.wordsToPick[this.wordInPlay].picture + "' alt='" +
          this.wordsToPick[this.wordInPlay].house + "'>";
  
        // Play an audio track of the character.
        var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
        audio.play();

        // return true, which will trigger the restart of our game in the updatePage function.
        return true;

      }
      // If win is false, return false to the updatePage function. The game goes on!
      return false;
    }
  };
  
  // Initialize the game when the page loads.
  wordGuessGame.setupGame();
  
  // When a key is pressed..
  document.onkeyup = function(event) {
    // Capture pressed key and make it lowercase.
    wordGuessGame.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    // Pass the guessed letter into our updatePage function to run the game logic.
    wordGuessGame.updatePage(wordGuessGame.letterGuessed);
  };

  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}