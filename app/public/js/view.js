// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {
  // save the character they typed into the character-search input
  //   searchedCharacter
  var searchedPlayer = $("#character-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //   searchedCharacter  searchedCharacter
  searchedPlayer = searchedPlayer.replace(/\s+/g, "");
  // password = password.replace(/\s+/g, "");
  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  //              searchedCharacter
  $.get("/api/" + searchedPlayer, function(data) {
    // log the data to our console
    console.log(data);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").empty();
      $("#well-section").append("<h2> No Steet Cred. Your Player was not found. </h2>");
      $("#alias").text(searchedPlayer);
    }
    else 
     {
      $("#well-section").empty();
      // otherwise
      // append the character name
      $("#alias").text(data.name);
       // the age
       $("#well-section").append("<br><h3>Age: " + data.age + "</h3>");
        // the city
      $("#well-section").append("<h3>City: " + data.city + "</h3>");
       // the park
       $("#well-section").append("<h3>Park: " + data.park + "</h3><br>");
      
     
      // and the force points
      // $("#well-section").append("<h3>Street Credit: " + data.streetCred + "</h3>");
    }
  });
});
