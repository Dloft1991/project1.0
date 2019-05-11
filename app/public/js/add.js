//ADD PLAYER
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  
  var newPlayer = {
    
    name: $("#name").val().trim(),
    city: $("#city").val().trim(),
    age: $("#age").val().trim(),
    password: $("#password").val().trim(),
    park: $("#park").val().trim()
  };

  $.post("/api/new", newPlayer)
    .then(function(data) {
      console.log(data);
      alert("Adding Player...");
    });

  $("#name").val("");
  $("#city").val("");
  $("#age").val("");
  $("street_credit").val("");
  $("#password").val("");
  $("#park").val("");

});
