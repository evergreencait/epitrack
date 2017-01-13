var userTime = parseInt($("input#time").val());
var userStyle = $("input:radio[name=style]:checked").val();
var userLearn = $("input:radio[name=learn]:checked").val();
var userCompany = $("input:radio[name=company]:checked").val();
var userCity = $("#city").val();


$(document).ready(function() {
  $("#questions form").submit(function(event){
    event.preventDefault();

      if (userTime <= 1) {
        alert("Sorry, you don't have enough time for any tracks");
      } else if (userTime > 1 && userStyle === "Back-end" && userCompany === "Start-up" && userStyle === "Javascript" || "CSS" && city === "Seattle" || "Portland"){
          $(".ruby").show();
      } else if (userTime > 1 && userStyle === "back-end" && userCompany === "Large company"  && userStyle === "Javascript" || "CSS" && userCity === "Seattle" || "Portland"){
          $(".php").show();
      } else if (userTime > 1 && userStyle === "front-end" && userCompany ==="Small start-up"  && userStyle === "Javascript" || "CSS" && userCity === "Seattle" || "Portland"){
          $(".css").show();
      }  else if (userTime > 1 && userStyle === "front-end" && userCompany === "Large company"  && userStyle === "Javascript" || "CSS" && userCity === "Seattle" || "Portland"){
          $(".design").show();
      } else {
        alert("Sorry! We need more information to make a recommendation")
      }

    });
});
