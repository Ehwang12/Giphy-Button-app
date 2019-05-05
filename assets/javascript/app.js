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

            var par = $("<p>").text("Rating: " + rating);

            var giphyResult = $("<img>");
            giphyResult.attr("src", results[i].images.fixed_height_still.url);

            wrapper.prepend(par);
            wrapper.prepend(giphyResult);

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
        //create data attribute
        movieBtn.attr("data-name", ghibliArray[i]);
        //add title of movies to buttons
        movieBtn.text(ghibliArray[i]);
        //append to button div
        $("#btnBox").append(movieBtn);
    }
}

$(document).on("click", ".movie", giphyINFO);
    
renderButtons();








})

