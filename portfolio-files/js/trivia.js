$(document).ready(function() {
        //My Bank of Question data, stored as an object-filled array.

        var gameData = [{
            "question": "What's the title of this song?",
            "correct": "Purple Rain",
            "incorrect": ["Kiss", "Little Red Corvette", "I Wanna Be Your Lover"],
            "src": "audio/predit.ogg"
        }, {
            "question": "Who sang this song?",
            "correct": "Journey",
            "incorrect": ["Styx", "Heart", "38 Special"],
            "src": "audio/journeyedit.ogg"
        }, {
            "question": "What's the title of this song?",
            "correct": "Panama",
            "incorrect": ["Jump", "Hot for Teacher", "House of Pain"],
            "src": "audio/panamaedit.ogg"
        }, {
            "question": "Who sang this song?",
            "correct": "Madness",
            "incorrect": ["Tears for Fears", "The Clash", "The Toasters"],
            "src": "audio/ourhouseedit.ogg"
        }, {
            "question": "What's the title of this song?",
            "correct": "Another One bites the dust",
            "incorrect": ["Bicycle", "We Will Rock You", "Somebody to love"],
            "src": "audio/aobtdedit.ogg"
        }, {
            "question": "Who sang this song?",
            "correct": "Toto",
            "incorrect": ["Chicago", "Journey", "Boston"],
            "src": "audio/africaedit.ogg"
        }, {
            "question": "What's the title of this song?",
            "correct": "Broken Wings",
            "incorrect": ["We Built this City", "Sunglasses at Night", "Carry on my wayward son"],
            "src": "audio/brokenwingsedit.ogg"
        }, {
            "question": "Who sang this song?",
            "correct": "Bon Jovi",
            "incorrect": ["Aerosmith", "Poison", "Def Leppard"],
            "src": "audio/bonjoviedit.ogg"
        }, {
            "question": "What's the title of this song?",
            "correct": "Faith",
            "incorrect": ["Wake Me up Before You Go-Go", "Careless Whisper", "Last Christmas"],
            "src": "audio/faithedit.ogg"
        }, {
            "question": "Who sang this song?",
            "correct": "Guns N' Roses",
            "incorrect": ["KISS", "AC/DC", "Mötley Crüe"],
            "src": "audio/jungleedit.ogg"
        }];

        //co-opted and remanipulated the timer code from week 3-4 for the purposes of this game. If it's already written, then why not?
        var masterInterval;
        var MasterTimer = {
            time: 120,
            reset: function() {
                MasterTimer.time = 120; //change the "display" div to "00:00"
                $('.master-timer').html('02:00');
                //empty the "laps" div
            },
            start: function() {
                //Use setInterval to start the count here
                masterInterval = setInterval(MasterTimer.count, 1000);
            },
            zero: function() {
                //Use clearInterval to stop the count here
                clearInterval(masterInterval);
            },
            count: function() {
                //increments time down.
                MasterTimer.time--;
                var masterDisplayedTimeToUser = MasterTimer.timeConverter(MasterTimer.time);
                //prints time to html
                $('.master-timer').html('<div>' + masterDisplayedTimeToUser + '</div>');
                if (MasterTimer.time === 0) {
                    MasterTimer.zero();
                }
            },
            timeConverter: function(t) {
                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                if (minutes === 0) {
                    minutes = "00";
                } else if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                return minutes + ":" + seconds;
            }

        }
        var theInterval;
        var QuestionTimer = {
            time: 30,
            reset: function() {
                QuestionTimer.time = 30; //change the "display" div to "00:00"
                $('.time-remaining').html('00:30');
                //empty the "laps" div
            },
            start: function() {
                //Use setInterval to start the count here
                theInterval = setInterval(QuestionTimer.count, 1000);
            },
            zero: function() {
                //Use clearInterval to stop the count here
                clearInterval(theInterval);
            },
            count: function() {
                //increments time down.
                QuestionTimer.time--;
                var displayedTimeToUser = QuestionTimer.timeConverter(QuestionTimer.time);
                //prints time to html
                $('.time-remaining').html('<div>' + displayedTimeToUser + '</div>');
                if (QuestionTimer.time === 0) {

                }
            },
            timeConverter: function(t) {
                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                if (minutes === 0) {
                    minutes = "00";
                } else if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                return minutes + ":" + seconds;
            }
        };

        //clever bit of code I found on the Internet. It's a pretty good place for finding things like that.
        function shuffle(array) {
            var m = array.length,
                t, i;
            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }

        var rightAnswers = 0;
        var wrongAnswers = 0;
        var questionsGuessed = 0;
        var activeQuestion;
        var music;
        var questionInterval = 0;

        function intervalToNextQuestion() {
            questionInterval = setInterval(nextQuestion, 30000);
        }

        //A LARGE COLLECTION OF FUNCTIONS FOLLOWS

        //this one is the important one. wow that too waaaay too long.
        function nextQuestion() {
            masterReset(); //really critical
            QuestionTimer.start();
            intervalToNextQuestion();
            activeQuestion = gameData[Math.floor(Math.random() * gameData.length)];
            $('.question-space').empty();
            $('.question-space').html('<div class="text-center game-question">' + activeQuestion.question + "<br></div>");
            //creates possible answers for the question
            var answerChoices = [activeQuestion.correct, activeQuestion.incorrect[0], activeQuestion.incorrect[1], activeQuestion.incorrect[2]];
            //randomizes the answer choices before appending
            shuffle(answerChoices);
            //appends the answer choices to the HTML
            for (var i = 0; i < answerChoices.length; i++) {
                $('.question-space').append('<button class="game-button">' + answerChoices[i] + "</button>");
            }
            //plays the music clip.
            music = new Audio(activeQuestion.src);
            music.play();

        }

        //clear the question-space
        function questionClear() {
            $('.question-space').empty();
        }

        //function for iterating questions
        //end of game condition. Revelations, if you will.
        function gameOver() {
            questionClear();
            //THESE THREE LINES ARE WAAAY CRITICAL.
            masterReset();
            MasterTimer.zero();
            QuestionTimer.zero();
            $('.time-remaining').html('00:00');
            $('.master-timer').html('00:00');
            $('.question-space').append('<div class="game-results-title text-center">Here are your results!</div>');
            $('.question-space').append('<div class="game-results text-center">Questions Correct: ' + rightAnswers + '</div>');
            $('.question-space').append('<div class="game-results text-center">Questions Wrong: ' + wrongAnswers + '</div>');
            $('.question-space').append('<div class="game-results text-center">Questions Guessed: ' + questionsGuessed + '</div>');
            $('.question-space').append('<div class="restart-holder"><button id="restart">Play again?</button></div>')
        }

        function masterReset() {
            clearInterval(questionInterval);
            QuestionTimer.zero();
            QuestionTimer.reset();
        }
        //WHERE THE MAGIC HAPPENS
        $('#start').click(function() {
            //THIS LINE IS WAAAY CRITICAL.
            masterReset();
            QuestionTimer.start();
            //gameover conditions
            MasterTimer.start();
            //load first question
            nextQuestion();
            setTimeout(gameOver, 120000);
            return false;
        });

        //MAKE SURE THAT YOU BIND THE EVENT TO SOMETHING THAT ALREADY EXISTS AT PAGE RENDER. This was a major source of beer consumption.
        $('.question-space').on('click', '.game-button', function() {
            console.log("clicked");
            var userSelect = this.innerHTML;
            if (userSelect === activeQuestion.correct) {
                music.pause();
                rightAnswers++;
                questionsGuessed++;
                console.log("yes");
                questionClear();
                masterReset();
                $('.game-button').unbind('click');
                nextQuestion();
            } else {
                music.pause();
                wrongAnswers++;
                questionsGuessed++;
                console.log("no...");
                questionClear();
                masterReset();
                $('.game-button').unbind('click');
                nextQuestion();
            }
            return false;
        });
        $('.question-space').on('click', '#restart', function() {
            console.log("restart clicked");
            //show both clocks at zero.
            rightAnswers = 0;
            wrongAnswers = 0;
            questionsGuessed = 0;
            questionClear();
            MasterTimer.zero();
            MasterTimer.reset();
            masterReset();
            QuestionTimer.start();
            MasterTimer.start();
            setTimeout(gameOver, 120000);
            //load first question
            nextQuestion();
            questionInterval;
            return false;
        });
    })

    
