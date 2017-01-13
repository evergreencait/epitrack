var time = parseInt($("input#time").val());
var style = $("input:checked").val();
var learn = $("input:checked").val();
var company = $("input:checked").val();
var city = $("input#city").val();


$(document).ready(function() {
  $("#questions form").submit(function(event){
    event.preventDefault();

      if (time <= 1) {
        alert("Sorry, you don't have enough time for any tracks");
      } else if (time > 1 && style === "back-end" && company === "Small start-up" && style === "Javascript" || "CSS" && city === "Seattle" || "Portland"){
          $(".ruby").show();
      } else if (time > 1 && style === "back-end" && company === "Large company"  && style === "Javascript" || "CSS" && city === "Seattle" || "Portland"){
          $(".php").show();
      } else if (time > 1 && style === "front-end" && company ==="Small start-up"  && style === "Javascript" || "CSS" && city === "Seattle" || "Portland"){
          $(".css").show();
      }  else if (time > 1 && style === "front-end" && company === "Large company"  && style === "Javascript" || "CSS" && city === "Seattle" || "Portland"){
          $(".design").show();
      } else {
        alert("Sorry! We need more information to make a recommendation")
      }

    });
});
