$(document).ready(function($) {
    //declare initial states and variables
    var dankMemeArray = ["Jon Snow", "Yas", "Rick and Morty", "Pepe", "Futurama Fry", "Feel the Bern"];

    //the for loop that populates all of the buttons
    for (var i = 0; i < dankMemeArray.length; i++) {
        $('#button-holder').append('<button class="dankMemeButtons" data-name="' + dankMemeArray[i] + '">' + dankMemeArray[i] + '</button>')
    }

     //a form that will push another item to the dankMemeArray WITHOUT refreshing the page. These are lost on page refresh.
    $('#newMeme').on('submit', function(e) {
            e.preventDefault();
            var memeInput = $('#memeInput').val();
            $('#button-holder').append('<button class="dankMemeButtons" data-name="' + memeInput + '">' + memeInput + '</button>');
            document.getElementById("memeInput").value = "";
        })

    //the button click function! It works!
    $('#button-holder').on('click', '.dankMemeButtons', function() {
        var buttonClicked = $(this).data("name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonClicked + "&limit=10&api_key=dc6zaTOxFJmzC";

        //the ajax call based on a click function
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function(response) {
                for (var i = 0; i < 10; i++) {
                    var rating = JSON.stringify(response.data[i].rating);
                    if (rating == "pg" || "pg-13" || "g") {
                        $(".gif-zone").prepend("<div class='gif-image'><img src='" + response.data[i].images.fixed_height_still.url + "'class='deliveredGif' data-still=" + response.data[i].images.fixed_height_still.url + " data-animate=" + response.data[i].images.fixed_height.url + '><div class="gif-rating text-center">Rating: ' + JSON.stringify(response.data[i].rating) + '</div></div>');
            $(".deliveredGif").attr("data-state", "still");
                    }
                }
            });
    })
   
        //stop and start gif playback
    $('.gif-zone').on('click', '.deliveredGif', function() {
    	 var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
   })
});
