$(document).ready(function() {
    var trainSchedule = new Firebase("https://eakin-trainschedule.firebaseio.com/");
    var trainSnapShotName;
    var trainSnapShotDestination;
    var trainSnapShotStartTime;
    var trainSnapShotFrequency;
    var trainSnapShotNext;
    var minutesAway;
    var tSST;
    //captures the moment RIGHT NOW
    var now = moment();
    var clock = setInterval(function() {
        document.getElementById("currentTime").innerHTML = "Current Time: " + (new Date()).toLocaleTimeString();
    }, 1000);

    // function () {
    //     iterate over table rows:
    //     assign first time and requency to variables
    //     call minutesCalc'd
    // }

    //////////////////////  APPEND DATA TO TABLE //////////////////////////
    function updateSchedule() {
        $('.trainSchedule').append("<tr class='train-table-row'><td class='data-train-name'> " + trainSnapShotName + " </td><td class='data-train-destination'> " + trainSnapShotDestination + " </td><td class='data-train-start'> " + moment(trainSnapShotStartTime).format("HH:mm") + "</td><td class='text-center data-train-frequency'>" + trainSnapShotFrequency + " </td><td class='text-center data-train-next'> " + trainSnapShotNext + "</td><td class='minutes-away text-center'>" + minutesAway + "</td></tr>")
    }
    //////////// CAPTURE FORM INPUT AND PUSH TO SERVER /////////////////////////
    $('#addTrain').on('click', function() {
            //user input into manipulateable variables
            var name = $('#trainName').val().trim();
            var destination = $('#trainDestination').val().trim();
            var startTime = $('#trainStartTime').val().trim();
            var frequency = $('#trainFrequency').val().trim();
            //// MORE FORM VALIDATION I COULDN'T QUITE GET RIGHT ///////
            // if ($.type(name) != "string") {
            //     alert("Please name the train.");
            //     $(e).preventDefault();
            //     $('#newTrainData').reset();
            // } else if ($.type(destination) != "string") {
            //     alert("Please enter a suitable destination.");
            //     $(e).preventDefault();
            //     $('#newTrainData').reset();
            // } else if (moment(startTime).format() == invalidDate) {
            //     alert("Please enter a suitable time.");
            //     $(e).preventDefault();
            //     $('#newTrainData').reset();
            // } else 
            if (isNaN(frequency) === true) {
                alert("Please put record frequency in minutes");
                $(e).preventDefault();
                $('#newTrainData').reset();
            } else {
                startTime = moment(startTime, "hh:mm").format();
                trainSchedule.push({
                    name: name,
                    destination: destination,
                    startTime: startTime,
                    frequency: frequency
                });
                return false;
            }
        })
        /////////////// CALCULATES TRAIN TIMES ON CLIENT SIDE /////////////////
    function minutesCalculator(trainSnapShotStartTime, trainSnapShotFrequency) {
        trainSnapShotNext = "";
        trainSnapShotStartTime = moment(trainSnapShotStartTime).format();
        now = moment(now).format();
        timeDiff = moment(now).diff(trainSnapShotStartTime, 'minutes');
        nextTrain = (timeDiff % trainSnapShotFrequency);
        nextTrain = trainSnapShotFrequency - nextTrain;
        // formats minutesAway to match the next train before the nextTrain var is concat'ed...
        minutesAway = moment(nextTrain, "mm").format("mm:ss");
        nextTrain = moment(now).add(nextTrain, 'minutes');
        trainSnapShotNext = moment(nextTrain).format("HH:mm");
        return minutesAway;
    }
    ///////////////// RETRIEVES DATA FROM SERVER ////////////////////
    trainSchedule.on("child_added", function(childSnapshot) {
        //server data variables
        trainSnapShotName = childSnapshot.val().name;
        trainSnapShotDestination = childSnapshot.val().destination;
        trainSnapShotStartTime = childSnapshot.val().startTime;
        trainSnapShotFrequency = childSnapshot.val().frequency;
        minutesCalculator(trainSnapShotStartTime, trainSnapShotFrequency);
        updateSchedule();

    }, function(errorObject) {
        alert("You done did it now. Here's the error throw: " + errorObject);
    });

    /////////////////// THE FUNCTION THAT'S GIVING ME TROUBLE ////////////////
    /////////////////// WHY WON'T IT RUNNNNNN ? ///////////////////////////////////
    // function replaceMinutesInTable() {
    //     $("<table>").on(function() {
    //         //in current state, start-time captures the 2nd row
    //         startTime = $('.data-train-start').html();
    //         startTime = moment(startTime, "mmss").format();
    //         console.log('startTime: ' + startTime);
    //         frequency = $('.data-train-frequency').html();
    //         console.log('frequency: ' + frequency);
    //         $("<tbody> <tr> <td>").each(function(startTime, frequency) {
    //             now = moment(now).format();
    //             timeDiff = moment(now).diff(startTime, 'minutes');
    //             var nextTrain = (timeDiff % frequency);
    //             nextTrain = frequency - nextTrain;
    //             minutesAway = moment(nextTrain, "mm").format("mm:ss");
    //         })
    //     });
    // };
    // var replaceTableCall = setInterval(function() {
    //     replaceMinutesInTable();
    // }, 1000);
});
