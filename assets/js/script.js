$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

$("#clearTasks").click(function () {
    localStorage.clear()
})

$("#saveBtn9am").click(function () {
    var content1 = $.trim($("#textarea9am").val())
    localStorage.setItem("content9am", JSON.stringify(content1));
});
$("#saveBtn10am").click(function () {
    var content2 = $.trim($("#textarea10am").val())
    localStorage.setItem("content10am", JSON.stringify(content2));
});
$("#saveBtn11am").click(function () {
    var content3 = $.trim($("#textarea11am").val())
    localStorage.setItem("content11am", JSON.stringify(content3));
});
$("#saveBtn12pm").click(function () {
    var content4 = $.trim($("#textarea12pm").val())
    localStorage.setItem("content12pm", JSON.stringify(content4));
});
$("#saveBtn1pm").click(function () {
    var content5 = $.trim($("#textarea1pm").val())
    localStorage.setItem("content1pm", JSON.stringify(content5));
});
$("#saveBtn2pm").click(function () {
    var content6 = $.trim($("#textarea2pm").val())
    localStorage.setItem("content2pm", JSON.stringify(content6));
});
$("#saveBtn3pm").click(function () {
    var content7 = $.trim($("#textarea3pm").val())
    localStorage.setItem("content3pm", JSON.stringify(content7));
});
$("#saveBtn4pm").click(function () {
    var content8 = $.trim($("#textarea4pm").val())
    localStorage.setItem("content4pm", JSON.stringify(content8));
});
$("#saveBtn5pm").click(function () {
    var content9 = $.trim($("#textarea5pm").val())
    localStorage.setItem("content5pm", JSON.stringify(content9));
});


$("#textarea9am").val(JSON.parse(localStorage.getItem("content9am")));
$("#textarea10am").val(JSON.parse(localStorage.getItem("content10am")));
$("#textarea11am").val(JSON.parse(localStorage.getItem("content11am")));
$("#textarea12pm").val(JSON.parse(localStorage.getItem("content12pm")));
$("#textarea1pm").val(JSON.parse(localStorage.getItem("content1pm")));
$("#textarea2pm").val(JSON.parse(localStorage.getItem("content2pm")));
$("#textarea3pm").val(JSON.parse(localStorage.getItem("content3pm")));
$("#textarea4pm").val(JSON.parse(localStorage.getItem("content4pm")));
$("#textarea5pm").val(JSON.parse(localStorage.getItem("content5pm")));

var displayTime = moment().format("LT");
var currentTime = moment().hours();

timeslot9am = new Date();
timeslot9am.setHours(9, 0, 0)
$("#9am").text(moment(timeslot9am).format("LT"))
if (currentTime < 9) {
    $("#textarea9am").addClass("future");
}
else if (currentTime === 9) {
    $("#textarea9am").addClass("present");
}
else {
    $("#textarea9am").addClass("past");
}

var timeslot10am = new Date();
timeslot10am.setHours(10, 0, 0)
$("#10am").text(moment(timeslot10am).format("LT"))
if (currentTime < 10) {
    $("#textarea10am").addClass("future");
}
else if (currentTime === 10) {
    $("#textarea10am").addClass("present");
}
else {
    $("#textarea10am").addClass("past");
}

var timeslot11am = new Date();
timeslot11am.setHours(11, 0, 0)
$("#11am").text(moment(timeslot11am).format("LT"))
if (currentTime < 11) {
    $("#textarea11am").addClass("future");
}
else if (currentTime === 11) {
    $("#textarea11am").addClass("present");
}
else {
    $("#textarea11am").addClass("past");
}

var timeslot12pm = new Date();
timeslot12pm.setHours(12, 0, 0)
$("#12pm").text(moment(timeslot12pm).format("LT"))
if (currentTime < 12) {
    $("#textarea12pm").addClass("future");
}
else if (currentTime === 12) {
    $("#textarea12pm").addClass("present");
}
else {
    $("#textarea12pm").addClass("past");
}

var timeslot1pm = new Date();
timeslot1pm.setHours(13, 0, 0)
$("#1pm").text(moment(timeslot1pm).format("LT"))
if (currentTime < 13) {
    $("#textarea1pm").addClass("future");
}
else if (currentTime === 13) {
    $("#textarea1pm").addClass("present");
}
else {
    $("#textarea1pm").addClass("past");
}

var timeslot2pm = new Date();
timeslot2pm.setHours(14, 0, 0)
$("#2pm").text(moment(timeslot2pm).format("LT"))
if (currentTime < 14) {
    $("#textarea2pm").addClass("future");
}
else if (currentTime === 14) {
    $("#textarea2pm").addClass("present");
}
else {
    $("#textarea2pm").addClass("past");
}

var timeslot3pm = new Date();
timeslot3pm.setHours(15, 0, 0)
$("#3pm").text(moment(timeslot3pm).format("LT"))
if (currentTime < 15) {
    $("#textarea3pm").addClass("future");
}
else if (currentTime === 15) {
    $("#textarea3pm").addClass("present");
}
else {
    $("#textarea3pm").addClass("past");
}

var timeslot4pm = new Date();
timeslot4pm.setHours(16, 0, 0)
$("#4pm").text(moment(timeslot4pm).format("LT"))
if (currentTime < 16) {
    $("#textarea4pm").addClass("future");
}
else if (currentTime === 16) {
    $("#textarea4pm").addClass("present");
}
else {
    $("#textarea4pm").addClass("past");
}

var timeslot5pm = new Date();
timeslot5pm.setHours(17, 0, 0)
$("#5pm").text(moment(timeslot5pm).format("LT"))
if (currentTime < 17) {
    $("#textarea5pm").addClass("future"); 
}
else if (currentTime === 17) {
    $("#textarea5pm").addClass("present"); 
}
else {
    $("#textarea5pm").addClass("past");
}