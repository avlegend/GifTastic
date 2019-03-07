
//Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var topicsArray = ["vodka", "whiskey", "gin", "tequila"];
//var giphyKey = "dxPi3hJyly0TQKgAMktssHQUo311vtEl"
var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=dxPi3hJyly0TQKgAMktssHQUo311vtEl&q=alcohol&limit=10&offset=0&rating=PG&lang=en"

$(document).on("click", "button", function () {
    // Put code here for when user clicks button
    $("#button").on("click", function () {


        // When user clicks button, request info from giphy
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=dxPi3hJyly0TQKgAMktssHQUo311vtEl&q=alcohol&limit=10&offset=0&rating=PG&lang=en"

        // display gifs from giphy

    })
})
// Use a for loop that appends a button for each string in the array
for (var i = 0; i < topicsArray.length; i++) {
    var button = $('<button>' + topicsArray[i] + '</button>');
    $("#buttonDiv").append(button);
    //$("#buttonDiv").on("click", function(){


}


$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (data) {
    console.log(data)
    var results = data.data[0].images
    var alcoholImage = $("<img>");
    alcoholImage.attr("src", imageUrl);
    alcoholImage.attr("alt", "alcohol image")
    $("#gifsAppearHere").prepend(alcoholImage)
    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        //var rating = results[i].rating
        //var p = $("<p>").text("Rating: " + rating)
    }



    var p = $("<p>")
    p.text("Rating: " + data.data[0].rating);

    //var alcoholImage = $("<img>");
    //alcoholImage.attr("src")



})

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Display the Gif rating. Data is provieded buy the GIPHY API

//Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
