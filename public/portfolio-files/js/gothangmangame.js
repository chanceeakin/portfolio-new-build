var game = {
    houseLibrary: ['Targaryen', 'Gaunt', 'Bolton', 'Cerwyn', 'Karstark', 'Manderly', 'Mormont', 'Umber', 'Glover', 'Reed', 'Marsh', 'Stark', 'Frey', 'Blackwood', 'Bracken', 'Tully', 'Whent', 'Lannister', 'Crakehall', 'Clegane', 'Casterly', 'Tyrell', 'Florent', 'Oakheart', 'Baratheon', 'Dondarrion', 'Selmy', 'Trant', 'Martell', 'Dayne', 'Greyjoy', 'Arryn', 'Baelish', 'Corbray', 'Waynwood'],
    guessesRemaining: 10,
    wins: 0,
    correctLetters: [],
    attempts: [],

    currentWord: function() {
        return [Math.floor(Math.random() * this.houseLibrary.length)];
    }

};
//houseOnDeck gets the array index. houseName is the actual word for gameplay.
var houseOnDeck = game.currentWord();
var houseName = game.houseLibrary[houseOnDeck];
var lowercaseName = houseName.toLowerCase();
var placeHolder = "";


document.getElementById('wins').innerHTML = "<p>Wins: " + game.wins + "</p>";
document.getElementById('guesses-remaining').innerHTML = "<p>Guesses Remaining: " + game.guessesRemaining + "</p>";
document.getElementById('attempts').innerHTML = "<p>Attempts: 0</p>";
document.getElementById('successful-letters').innerHTML = "<p>Correct Letters: 0</p>";

console.log(houseName);

//create game function
function createGame() {
    for (i = 0; i < houseName.length; i++) {
        letterList = "<li id='" + i + "'> - </li>";
        document.getElementById('game').innerHTML += letterList;
    }
}
// function is called. gameboard is set up. Now we play...
createGame();


// the action code for the game. 

document.onkeyup = function(event) {
    //takes input from user, makes lower case
    var input = String.fromCharCode(event.keyCode).toLowerCase();
    //if statement to check whether the user...actually hit a letter.
    if (event.keyCode > 64 && event.keyCode < 91) {
        //checks to see if input has already been pressed
        if (game.attempts.indexOf(input) === -1) {
            game.attempts.push(input);
            if (lowercaseName.indexOf(input) > -1) {
                game.correctLetters.push(input);
                var index = lowercaseName.indexOf(input);
                document.getElementById(index).innerHTML = input;
                if (lowercaseName.indexOf(input, index + 1) > -1) {
                    var otherIndex = lowercaseName.indexOf(input, index + 1);
                    game.correctLetters.push(input);
                    document.getElementById(otherIndex).innerHTML = input;
                }
                //win conditions!
                if (lowercaseName.length === game.correctLetters.length) {
                    document.getElementById('game-win').innerHTML = "King of the North!";
                    game.wins++; //increment wins by 1
                    game.guessesRemaining = 10; //reset guesses
                    game.attempts = []; //reset attempts array
                    game.correctLetters = []; //reset correctLetters array
                    setTimeout(function() { document.getElementById('game').innerHTML = ""; }, 3000);
                    setTimeout(function() { document.getElementById('game-win').innerHTML = ""; }, 3000);
                    //pick new game!!!
                    houseOnDeck = game.currentWord();
                    houseName = game.houseLibrary[houseOnDeck];
                    lowercaseName = houseName.toLowerCase();
                    setTimeout(function() { createGame(); }, 4000);
                    console.log(houseName + "win");
                }
                console.log(index);
            } else {
                game.guessesRemaining--;
            }
            //loss conditions!
            if (game.guessesRemaining === 0) {
                document.getElementById('game-win').innerHTML = "Sorry Ned.";
                game.losses++;
                game.guessesRemaining = 10;
                game.attempts = [];
                game.correctLetters = [];
                setTimeout(function() { document.getElementById('game').innerHTML = ""; }, 3000);
                setTimeout(function() { document.getElementById('game-win').innerHTML = ""; }, 3000);
                houseOnDeck = game.currentWord();
                houseName = game.houseLibrary[houseOnDeck];
                lowercaseName = houseName.toLowerCase();
                setTimeout(function() { createGame(); }, 4000); //recreate game
                console.log(houseName + "lose");
            }
        }
        // DRY, but Finished > Pretty.
        document.getElementById('wins').innerHTML = "<p>Wins: " + game.wins + "</p>";
        document.getElementById('guesses-remaining').innerHTML = "<p>Guesses Remaining: " + game.guessesRemaining + "</p>";
        document.getElementById('attempts').innerHTML = "<p>Attempts: </p>" + game.attempts;
        document.getElementById('successful-letters').innerHTML = "<p>Correct Letters: </p>" + game.correctLetters;
    }
}
