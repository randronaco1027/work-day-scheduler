$("#saveBtn").click(function(){
    //local storage
})

$("#currentDay").text(moment().format("MMM Do YYYY"))

console.log(moment().set("hour", 9))
console.log(moment().tz("America/Los_Angeles").format());


$("#9am").text(moment().set("hour", 9))
$("#10am").text(moment().format("MMM Do YYYY"))
$("#11am").text(moment().format("MMM Do YYYY"))
$("#12pm").text(moment().format("MMM Do YYYY"))
$("#1pm").text(moment().format("MMM Do YYYY"))
$("#2pm").text(moment().format("MMM Do YYYY"))
$("#3pm").text(moment().format("MMM Do YYYY"))
$("#4pm").text(moment().format("MMM Do YYYY"))
$("#5pm").text(moment().format("MMM Do YYYY"))

// // Add auditing WITH TIMER to boxes
// var auditTask = function(taskEl) {

//     // get date from task element
//     var date = $(taskEl)
//       .find("span")
//       .text()
//       .trim();
  
//     console.log(date);
  
//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);
  
//     console.log(time);
  
//     // remove any old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//       $(taskEl).addClass("list-group-item-danger");
//     } 
//     else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(taskEl).addClass("list-group-item-warning");
//     }
//   };

// // Enable boxes to be edited
// $(".list-group").on("blur", "textarea", function() {
//     // get current value of textarea
//     var text = $(this).val();
  
//     // get status type and position in the list
//     var status = $(this)
//       .closest(".list-group")
//       .attr("id")
//       .replace("list-", "");
//     var index = $(this)
//       .closest(".list-group-item")
//       .index();
  
//     // update task in array and re-save to localstorage
//     tasks[status][index].text = text;
//     saveTasks();
  
//     // recreate p element
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(text);
  
//     // replace textarea with new content
//     $(this).replaceWith(taskP);
//   });

// // Save buttons
// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };