$(function() {

    //initial placeholder of movies
    var ghibliArray = [
        "Howl's Moving Castle",
        "Porco Rosso",
        "Princess Mononoke",
        "My Neighbor Totoro",
        "Kiki's Delivery Service"
    ]

    
    

    //function that displays giphy rating
function giphyINFO() {
    
    var search = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RcAZt1GF60gWuB2gM73jIyr6CQNmCsz1&q=" + search + "&limit=10&";

    //AJAX call for specific giphy being requested
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        let results = response.data;
       
        for(var i = 0; i < results.length; i++) {
            //creating div to hold gif
            var wrapper = $("<div>");
            //retrieve rating value
            var rating = results[i].rating;
            console.log(rating);

            //variable for rating value
            var par = $("<p>").text("Rating: " + rating);

            //creating gif elements and their attributes
            var stillURL = results[i].images.fixed_height_still.url;
            var animatedURL = results[i].images.fixed_height.url;

            var giphyResult = $("<img>");
            giphyResult.attr("src", stillURL);
            giphyResult.attr("class", "gif");
            giphyResult.attr("data-animate", animatedURL);
            giphyResult.attr("data-still", stillURL);
            giphyResult.attr("data-state", "still");

            wrapper.prepend(par);
            wrapper.prepend(giphyResult);
            //adding gifs to DOM
            $("#gifBox").prepend(wrapper);
        }
    });
};

function renderButtons() {
    //empty div to prevent unncessary appending
    $("#btnBox").empty();
    //for loop to go through array
    for(var i = 0; i < ghibliArray.length; i++) {
        //create button element
        let movieBtn = $("<button>");
        //create movie class
        movieBtn.addClass("movie btn btn-outline-success mx-2 my-2");
        //create data attributes
        movieBtn.attr("data-name", ghibliArray[i]);

        //add title of movies to buttons
        movieBtn.text(ghibliArray[i]);
        //append to button div
        $("#btnBox").append(movieBtn);
    }
}

//click event handler for gif pause/play
$(document).on("click", ".gif", function() {
    let dataAnimate = $(this).attr("data-animate");
    let dataStill = $(this).attr("data-still");
    var state = $(this).attr("data-state");

    console.log("this is logging dataAnimate: " + dataAnimate);
    console.log("this is logging dataStill: " + dataStill);
    console.log("this is logging state: " + state);

    //check variable is equal to still
    if(state === "still") {
        //change source using attribute method
        $(this).attr("src", dataAnimate);
        //change state
        $(this).attr("data-state", "animating");
    } else {
        //change source back to still url
        $(this).attr("src", dataStill);
        //change data state back to still
        $(this).attr("state", "still");

    }
});

$(document).on("click", "#submit", function() {
    event.preventDefault();
    //grab input from new search
    var newGif = $("#newGIF").val().trim();
    //push new gif into array
    ghibliArray.push(newGif);
    //render new button
    renderButtons();
})

//click event handler for generating gifs for movie array
$(document).on("click", ".movie", giphyINFO);

renderButtons();


})

