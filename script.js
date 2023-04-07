//$(document).ready(function () {}; allows us to invoke DOM manipulation//
$(document).ready(function () {
  //#ID has properly been added to HTML file to set date format//
  //.Claas Event listener has been added//
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
  $(".saveBtn").on("click", function () {
    
      console.log(this);
      var text = $(this).siblings(".description").val();//links to html sheet //
      var time = $(this).parent().attr("id");//links to changes inside style sheet// 
     
      localStorage.setItem(time, text);//local storage will save event moments// 
      
  })
  
//This function will be the runninng engine//
  function hourTracker() {
    
      var currentHour = moment().hour(); 

      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("hour")[1]);
          console.log( blockHour, currentHour)

          if (blockHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  hourTracker(); 
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
