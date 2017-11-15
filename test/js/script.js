// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json",
            function (res) {
              console.log(res["no of cars"]);
              var message = res.firstname + " " +res.lastname ;
              if (res.likescurd){
                message += " likes curd"
              }
              else {
                message += "doesn't like curd"
              }
              message += " and has "
              message += res.noofpens
              message += " pens to write and has "
              message += res["no of cars"]
              message += ' car'



              document.querySelector("#content")
                .innerHTML = "<h2>Hello "+ message +" !</h2>";
            });


      });
  }
);
