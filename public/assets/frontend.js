//make sure to wait to attach handlebars until the DOM is fully loaded
$(function () {

    //when devour btn is clicked, update devoured state and move the burger
    $(".devoured-btn").on("click", function (event) {
      const id = $(this).data("id");
      const newDevoured = $(this).data("devoured");
  
      const newDevouredState = {
        devoured: newDevoured
      };
  
      let currentURL = window.location.origin;
      $.ajax(currentURL + "/api/burgers/devoured/" + id, {
        type: "PUT",   //there's no jQuery helper function for PUT requests
        data: newDevouredState
      }).then(function () {
        console.log("changed devoured to", newDevoured);
        // reload the page to display updated list
        location.reload();
      });
    });
  
  
    // add a new burger to the database by POST request
    $(".order-form").on("submit", function (event) {
      event.preventDefault();
  
  
      if ($("#newbuger").val() === "") {
        console.log("Enter a burger name!");
      } else {
        const newBurger = {
          burger_name: $("#newbuger").val()
        };
  
        let currentURL = window.location.origin;
        $.post(currentURL + "/api/burgers", newBurger)
          .then(function (data) {
            console.log(data);
            // reload the page to display updated list
            location.reload();
          });
      }
  
    });
  
  
    // when delete button is clicked, delete the burger from the page
    $(".delete-btn").on("click", function () {
      const id = $(this).data("id");
  
      let currentURL = window.location.origin;
      $.ajax(currentURL + "/api/burgers/" + id, {
        type: "DELETE"
      }).then(function () {
        console.log(`id: ${id} is deleted!`);
        $(".devoured-burger" + id).remove();
        // location.reload();
      });
  
    });
  
  });