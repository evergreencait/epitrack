var time = parseInt($("input#time").val());
var style = $("input:radio[name=style]:checked").val();
var learn = $("input:radio[name=learn]:checked").val();
var company = $("input:radio[name=company]:checked").val();
var city = $("input#city").val();



$(document).ready(function() {
  $("form#question").submit(function(event){


      if (time < 1) {
        alert("Sorry, you don't have enough time to do any tracks")
      } else {
      if (city === "Seattle") {
         if (style === "Back-end" && company === "Start-up"){
          $(".ruby").show();
        } else if (style === "back-end" && company === "Large company"){
          $(".php").show();
        } else if (style === "front-end" && company ==="Small start-up"){
          $(".css").show();
        }  else if (style === "front-end" && company === "Large company"){
          $(".design").show();
        }
    } else if (city === "Portland") {
      if (style === "Back-end" && company === "Start-up"){
        $(".ruby").show();
      } else if (style === "back-end" && company === "Large company"){
       $(".php").show();
      } else if (style === "front-end" && company ==="Small start-up"){
       $(".css").show();
      }  else if (style === "front-end" && company === "Large company"){
       $(".design").show();
      } else
          alert("Sorry! We need more information to make a recommendation")
      }
    }
      event.preventDefault();
    });
  });
