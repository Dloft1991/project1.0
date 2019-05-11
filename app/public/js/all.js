//PLAYER
$.get("/api", function(data) {

  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "character-well-" + i);
    $("#well-section").append(wellSection);

   
    $("#character-well-" + i).append("<br>");
    $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
    $("#character-well-" + i).append("<h3>Park: " + data[i].park + "</h4>");
   
  }
});

