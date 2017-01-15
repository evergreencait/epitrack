
$(document).ready(function(){
  $("form#questions").submit(function(event){

    var styleInput = $("input[name=style]:checked").val();
    var companyInput = $("input[name=company]:checked").val();
    var cityInput = $("input[name=city]:checked").val();
    var timeInput = parseInt($("#time").val());
    var personInput = $("input#person").val()

    $(".ruby").hide();
    $(".php").hide();
    $(".css").hide();
    $(".design").hide();


      if (timeInput <= 1) {
             alert("Sorry, you don't have time to do a track!");
           } else {
             if (cityInput === "portland") {
               if (companyInput === "start-up" && styleInput === "back-end") {
                 $(".person").text(personInput);
                 $(".ruby").show();
               } else if (companyInput === "start-up" && styleInput === "front-end") {
                 $(".person").text(personInput);
                 $(".design").show();
               } else if (companyInput === "large" && styleInput === "back-end") {
                  $(".person").text(personInput);
                 $(".php").show();
               } else if (companyInput === "large" && styleInput === "front-end") {
                 $(".person").text(personInput);
                 $(".css").show();
               }
             } else if (cityInput === "seattle") {
               if (companyInput === "start-up" && styleInput === "back-end") {
                 $(".person").text(personInput);
                 $(".ruby").show();
               } else if (companyInput === "start-up" && styleInput === "front-end") {
                 $(".person").text(personInput);
                 $(".design").show();
               } else if (companyInput === "large" && styleInput === "back-end") {
                 $(".person").text(personInput);
                 $(".php").show();
               } else if (companyInput === "large" && styleInput === "front-end") {
                 $(".person").text(personInput);
                 $(".css").show();
               }
             }
           }
           event.preventDefault();
         });
       });
