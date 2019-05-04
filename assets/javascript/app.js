$(function() {

    var ghibliArray = [
        "Howl's Moving Castle",
        "Porco Rosso",
        "Princess Mononoke",
        "My Neighbor Totoro",
        "Kiki's Delivery Service"
    ]
    
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
    
renderButtons();








})

