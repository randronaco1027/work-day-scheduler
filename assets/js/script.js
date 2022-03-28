$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

$("#clearTasks").click(function () {
    localStorage.clear()
})

$("#saveBtn1").click(function () {
    var content1 = $.trim($("#textarea1").val())
    localStorage.setItem ("content1", JSON.stringify(content1));
});
$("#saveBtn2").click(function () {
    var content2 = $.trim($("#textarea2").val())
    localStorage.setItem ("content2", JSON.stringify(content2));
});
$("#saveBtn3").click(function () {
    var content3 = $.trim($("#textarea3").val())
    localStorage.setItem ("content3", JSON.stringify(content3));
});
$("#saveBtn4").click(function () {
    var content4 = $.trim($("#textarea4").val())
    localStorage.setItem ("content4", JSON.stringify(content4));
});
$("#saveBtn5").click(function () {
    var content5 = $.trim($("#textarea5").val())
    localStorage.setItem ("content5", JSON.stringify(content5));
});
$("#saveBtn6").click(function () {
    var content6 = $.trim($("#textarea6").val())
    localStorage.setItem ("content6", JSON.stringify(content6));
});
$("#saveBtn7").click(function () {
    var content7 = $.trim($("#textarea7").val())
    localStorage.setItem ("content7", JSON.stringify(content7));
});
$("#saveBtn8").click(function () {
    var content8 = $.trim($("#textarea8").val())
    localStorage.setItem ("content8", JSON.stringify(content8));
});
$("#saveBtn9").click(function () {
    var content9 = $.trim($("#textarea9").val())
    localStorage.setItem ("content9", JSON.stringify(content9));
});


$("#textarea1").val(localStorage.getItem ("content1"));
$("#textarea2").val(localStorage.getItem ("content2"));
$("#textarea3").val(localStorage.getItem ("content3"));
$("#textarea4").val(localStorage.getItem ("content4"));
$("#textarea5").val(localStorage.getItem ("content5"));
$("#textarea6").val(localStorage.getItem ("content6"));
$("#textarea7").val(localStorage.getItem ("content7"));
$("#textarea8").val(localStorage.getItem ("content8"));
$("#textarea9").val(localStorage.getItem ("content9"));

var currentTime = moment().format("LT");

var timeslot1 = new Date();
timeslot1.setHours(9,0,0)
$("#9am").text(moment(timeslot1).format("LT"))
if (currentTime <= moment(timeslot1).format("LT")) {
    $("#textarea1").removeClass("future");
    $("#textarea1").addClass("past");
    console.log("Past")
    console.log(timeslot1)
}

var timeslot2 = new Date();
timeslot2.setHours(10,0,0)
$("#10am").text(moment(timeslot2).format("LT"))
if (currentTime <= moment(timeslot2).format("LT")) {
    $("#textarea2").removeClass("future");
    $("#textarea2").addClass("past");
    console.log("Past")
}
else {
    console.log("False")
    console.log(timeslot2)
}

var timeslot3 = new Date();
timeslot3.setHours(11,0,0)
$("#11am").text(moment(timeslot3).format("LT"))
if (currentTime <= moment(timeslot3).format("LT")) {
    $("#textarea3").removeClass("future");
    $("#textarea3").addClass("past");
    console.log("Past")
}
else {
    console.log("False")
    console.log(timeslot3)
}

var timeslot4 = new Date();
timeslot4.setHours(12,0,0)
$("#12pm").text(moment(timeslot4).format("LT"))
if (currentTime <= moment(timeslot4).format("LT")) {
    $("#textarea4").removeClass("future");
    $("#textarea4").addClass("past");
    console.log("Past")
    console.log(timeslot4)
}

var timeslot5 = new Date();
timeslot5.setHours(13,0,0)
$("#1pm").text(moment(timeslot5).format("LT"))
if (currentTime <= moment(timeslot5).format("LT")) {
    $("#textarea5").removeClass("future");
    $("#textarea5").addClass("past");
    console.log("Past")
    console.log(timeslot5)
}

var timeslot6 = new Date();
timeslot6.setHours(14,0,0)
$("#2pm").text(moment(timeslot6).format("LT"))
if (currentTime <= moment(timeslot6).format("LT")) {
    $("#textarea6").removeClass("future");
    $("#textarea6").addClass("past");
    console.log("Past")
    console.log(timeslot6)
}

var timeslot7 = new Date();
timeslot7.setHours(15,0,0)
$("#3pm").text(moment(timeslot7).format("LT"))
if (currentTime <= moment(timeslot7).format("LT")) {
    $("#textarea7").removeClass("future");
    $("#textarea7").addClass("past");
    console.log("Past")
    console.log(timeslot7)
}

var timeslot8 = new Date();
timeslot8.setHours(16,0,0)
$("#4pm").text(moment(timeslot8).format("LT"))
if (currentTime <= moment(timeslot8).format("LT")) {
    $("#textarea8").removeClass("future");
    $("#textarea8").addClass("past");
    console.log("Past")
    console.log(timeslot8)
}

var timeslot9 = new Date();
timeslot9.setHours(17,0,0)
$("#5pm").text(moment(timeslot9).format("LT"))
if (currentTime <= moment(timeslot9).format("LT")) {
    $("#textarea9").removeClass("future");
    $("#textarea9").addClass("past");
    console.log("Past")
    console.log(timeslot9)
}