// format synatx
// starting and pausing gifs
// adding correct gifs to the assigned buttons
//adding more buttons to the prompt box


$(document).on("click", "button", function () {
    var x = $(this).attr("data-alcohol");
    var topicsArray = ["vodka", "whiskey", "gin", "tequila"];
    //console.log(x)
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + x +
        "&api_key=dxPi3hJyly0TQKgAMktssHQUo311vtEl&limit=10";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $('#gifsAppearHere').empty();
        for (var i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.original.url)
            var alcoholDiv = $("<div>");
            var p = $("<p>").text("Rating: " + response.data[i].rating);
            var alcoholImg = $("<img>");
            alcoholImg.attr('class', 'image_click');
            alcoholImg.attr('data-gif', response.data[i].images.fixed_height.url);
            alcoholImg.attr('data-still', response.data[i].images.fixed_height_still.url);
            alcoholImg.attr('data-state', 'still');
            alcoholImg.attr('src', response.data[i].images.fixed_height_still.url);
            alcoholDiv.append(p);
            alcoholDiv.append(alcoholImg);
            $("#gifsAppearHere").append(alcoholDiv)

        }
    }).catch(function (err) {
        console.log(err);
    });



    //})
    // here we have a forloop to loop through our array and 
    //create a button for each item in our arrey
    // for (var i = 0; i < topicsArray.length; i++) {
    //     var button = $('<button>' + topicsArray[i] + '</button>');
    //     $("#buttonDiv").append(button);
    // }
    //function getGifs())

    // This function is not working
    //this should pause the gifs when clicked

});

$("#add-alcohol").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#alcohol-input").val().trim()
    var newButton = '<button data-state="still" data-alcohol="' + userInput + '">' + userInput + '</button>'
    $("#buttonHolder").append(newButton);

});

$(document).on("click", ".image_click", function () {
    var state = $(this).attr("data-state") //state shoudl equal still

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-gif"));
        $(this).attr("data-state", "animate");

    }
    else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still");
    }
});