// NOTES: The selection alert triggers too much, but everything else works.
// The math may be a little buggy, but that's more of a balance issue...
//Hell, League of Legends patches for balance every week.


$(document).ready(function() {
    //declaration of each of the rpg characters
    var Rick = {
        name: 'Rick',
        hp: 60,
        ap: 30,
        constantAP: 30
    }
    var Morty = {
        name: 'Morty',
        hp: 100,
        ap: 15,
        constantAP: 15
    }
    var Jerry = {
        name: 'Jerry',
        hp: 120,
        ap: 10,
        constantAP: 10
    }
    var Squanchy = {
            name: 'Squanchy',
            hp: 150,
            ap: 20,
            constantAP: 20
        }
        //initial state variables.
    var characterPicked = false;
    var enemyPicked = false;
    var character = "";
    var enemy = "";
    var enemiesLeft = 3;
    //formulae for the gameboard set up and reset

    function resetMaster() {
        document.location.reload(false);
    }

    function winConditions() {
        $('.header-zone').html("<h1>Wubba lubba dub dub!!!</h1>");
        $('#fight-title').html("<h2>You win!!</h2>")
    }

    function loseConditions() {
        $('.header-zone').html("<h1>You Lose!</h1>");
        $('#fight-title').html("<h2>And that's the waaaaaay the news goes. You lose.</h2>");
    }

    function resetLose() {
        loseConditions();
        setTimeout(resetMaster, 3000);
    }

    function resetWin() {
        winConditions();
        setTimeout(resetMaster, 3000);
    }


    $('.rick').on('click', function() {
        if (characterPicked === false) {
            $(this).appendTo('.characterHolder');
            characterPicked = true;
            character = Rick;
            $('.left-fight-title').html(Rick.name);
            $('.characterName', '.left-fight').hide();
            $('#fight-title').html("<h2>Pick your opponent!</h2>");
            $('.heroResults').html("<h3>" + Rick.hp + "</h3>");
        } else if (characterPicked === true && enemyPicked === false && character !== Rick) {
            enemyPicked = true;
            $('.enemyHolder').append(this);
            enemy = Rick;
            $('.right-fight-title').html(Rick.name);
            $('.characterName', '.right-fight').hide();
            $('.enemyResults').html("<h3>" + Rick.hp + "</h3>");
            $('.fight-button').show("slow");
            $('#fight-title').html("<h2>Let's do this!</h2>");
        } else {
            alert("You can't fight them all at the same time. Don't even trip, dog.");
        }
    });

    $('.morty').on('click', function() {
        if (characterPicked === false) {
            $(this).appendTo('.characterHolder');
            characterPicked = true;
            character = Morty;
            $('.left-fight-title').html(Morty.name);
            $('.characterName', '.left-fight').hide();
            $('#fight-title').html("<h2>Pick your opponent!</h2>");
            $('.heroResults').html("<h3>" + Morty.hp + "</h3>");
        } else if (characterPicked === true && enemyPicked === false && character !== Morty) {
            enemyPicked = true;
            $('.enemyHolder').append(this);
            enemy = Morty;
            $('.right-fight-title').html(Morty.name);
            $('.characterName', '.right-fight').hide();
            $('.enemyResults').html("<h3>" + Morty.hp + "</h3>");
            $('.fight-button').show("slow");
            $('#fight-title').html("<h2>Let's do this!</h2>");
        } else {
            alert("You can't fight them all at the same time. Don't even trip, dog.");
        }
    });

    $('.jerry').on('click', function() {
        if (characterPicked === false) {
            $(this).appendTo('.characterHolder');
            characterPicked = true;
            character = Jerry;
            $('.left-fight-title').html(Jerry.name);
            $('.characterName', '.left-fight').hide();
            $('#fight-title').html("<h2>Pick your opponent!</h2>");
            $('.heroResults').html("<h3>" + Jerry.hp + "</h3>");
        } else if (characterPicked === true && enemyPicked === false && character !== Jerry) {
            enemyPicked = true;
            $('.enemyHolder').append(this);
            enemy = Jerry;
            $('.right-fight-title').html(Jerry.name);
            $('.characterName', '.right-fight').hide();
            $('.enemyResults').html("<h3>" + Jerry.hp + "</h3>");
            $('.fight-button').show("slow");
            $('#fight-title').html("<h2>Let's do this!</h2>");
        } else {
            alert("You can't fight them all at the same time. Don't even trip, dog.");
        }
    });

    $('.squanchy').on('click', function() {
        if (characterPicked === false) {
            $(this).appendTo('.characterHolder');
            characterPicked = true;
            character = Squanchy;
            $('.left-fight-title').html(Squanchy.name);
            $('.characterName', '.left-fight').hide();
            $('#fight-title').html("<h2>Pick your opponent!</h2>");
            $('.heroResults').html("<h3>" + Squanchy.hp + "</h3>");
        } else if (characterPicked === true && enemyPicked === false && character !== Squanchy) {
            enemyPicked = true;
            $('.enemyHolder').append(this);
            enemy = Squanchy;
            $('.right-fight-title').html(Squanchy.name);
            $('.characterName', '.right-fight').hide();
            $('.enemyResults').html("<h3>" + Squanchy.hp + "</h3>");
            $('.fight-button').show("slow");
            $('#fight-title').html("<h2>Let's do this!</h2>");
        } else {
            alert("You can't fight them all at the same time. Don't even trip, dog.");
        }
    });

    //game math
    $('.fight-button').on('click', function() {
            console.log(character.name + character.hp);
            console.log(enemy.name + enemy.hp);
            if (enemyPicked === true) {
                character.ap += character.constantAP;
                enemy.hp = enemy.hp - character.ap;
                character.hp = character.hp - enemy.constantAP;
                $('.heroResults').html("<h3>" + character.hp + "</h3>");
                $('.enemyResults').html("<h3>" + enemy.hp + "</h3>");
                console.log("char" + character.name + "attack" + character.ap + "hp" + character.hp);
                console.log("enemy" + enemy.name + "hp" + enemy.hp);

                // win and loss conditions
                //loss condition upon death
                if (character.hp <= 0) {
                    resetLose();
                };

                if (character.hp <= 0 && enemy.hp <= 0) {
                    resetLose();
                };
                //killed one or two of three opponents
                if (enemy.hp <= 0 && enemyPicked === true) {
                    enemiesLeft -= 1;
                    enemyPicked = false;
                    $('.fight-title').empty();
                    $('.right-fight-title').empty();
                    $('.enemyHolder').empty();
                    $('.enemyResults').empty();
                    $('#fight-title').html("<h2>Who's next?</h2>");
                }
                //win scenario
                if (enemiesLeft === 0 && character.hp > 0) {
                    resetWin();
                }
            }
        }) //document on click from around line 159

}); //belongs to the document.ready call in line 1

