$(document).ready(function(){
    $(".announcement").append("<button class='button'>X</button>");
   
    $(".announcement button").click(function(){
      $(".announcement p").toggle();
      if ($(".announcement button").html() == "X"){
        $("button").text("Show announcement");
      }
      else{
        $("button").text("X");
      }
      });
   });