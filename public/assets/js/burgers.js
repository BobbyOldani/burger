$(function() {
  $(".change-devoured").on("click", function(event) {
    console.log("Devoured? button has been clicked");
    let id = $(this).data("id");
    let newDevouredState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    })
      .then(function() {
        console.log("Changed devoured to", newDevouredState);
        location.reload();
      })
  });

  $(".create-form").on("submit", function(event) {
    console.log("Submit button clicked");
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burg")
        .val()
        .trim()
    };
    console.log("New Burger", newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Created a new burger");
      location.reload();
    });
  });
});
