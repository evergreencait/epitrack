var city = $(#city).val();
var time = parseInt($(#time).val());
var style = $("input:checked").val();
var learn = $("input:checked").val();
var company = $("input:checked").val();


$(document).ready(function(){
  $("form#questions").submit(event){
    event.preventDefault();

  if (time <= 1) {
    alert("Sorry, you don't have enough time for any tracks")
  } else if {
    (time > 1 && style === "back-end" && company === "Small start-up") {
      $(".ruby").show();
  } else if {
    (time > 1 && style === "back-end" && company === "Large company")
      $(".php").show();
  } else if {
    (time > 1 && style === "front-end" && company ==="Small start-up")
      $(".css").show();
  }  else if {
    (time > 1 && style === "front-end" && company ==== "Large company")
      $(".design").show();
  } else {
    alert("sorry, we need more information to make a recommendation")
  }
});
