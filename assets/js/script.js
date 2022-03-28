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

var currentTime = moment().format("LT");

var timeslot9am = new Date();
timeslot9am.setHours(9, 0, 0)
$("#9am").text(moment(timeslot9am).format("LT"))
if (currentTime > moment(timeslot9am).format("LT")) {
    $("#textarea9am").addClass("future");
    console.log("Future")
    console.log(timeslot9am)
}
else {
    $("#textarea9am").addClass("past");
    console.log("Past")
    console.log(timeslot9am)
}

var timeslot10am = new Date();
timeslot10am.setHours(10, 0, 0)
$("#10am").text(moment(timeslot10am).format("LT"))
if (currentTime < moment(timeslot10am).format("LT")) {
    $("#textarea10am").addClass("future");
    console.log("Future")
    console.log(timeslot10am)
}
else {
    $("#textarea10am").addClass("past");
    console.log("Past")
    console.log(timeslot10am)
}

var timeslot11am = new Date();
timeslot11am.setHours(11, 0, 0)
$("#11am").text(moment(timeslot11am).format("LT"))
if (currentTime <= moment(timeslot11am).format("LT")) {
    $("#textarea11am").addClass("future");
    console.log("Future")
    console.log(timeslot11am)
}
else {
    $("#textarea11am").addClass("past");
    console.log("Past")
    console.log(timeslot11am)
}

var timeslot12pm = new Date();
timeslot12pm.setHours(12, 0, 0)
$("#12pm").text(moment(timeslot12pm).format("LT"))
if (currentTime <= moment(timeslot12pm).format("LT")) {
    $("#textarea12pm").addClass("future"); 
    console.log("Future")
    console.log(timeslot12pm)
}
else {
    $("#textarea12pm").addClass("past");
    console.log("Past")
    console.log(timeslot12pm)
}

var timeslot1pm = new Date();
timeslot1pm.setHours(13, 0, 0)
$("#1pm").text(moment(timeslot1pm).format("LT"))
if (currentTime <= moment(timeslot1pm).format("LT")) {
    $("#textarea1pm").addClass("future"); 
    console.log("Future")
    console.log(timeslot1pm)
}
else {
    $("#textarea1pm").addClass("past");
    console.log("Past")
    console.log(timeslot1pm)
}

var timeslot2pm = new Date();
timeslot2pm.setHours(14, 0, 0)
$("#2pm").text(moment(timeslot2pm).format("LT"))
if (currentTime <= moment(timeslot2pm).format("LT")) {
    $("#textarea2pm").addClass("future");
    console.log("Future")
    console.log(timeslot2pm)
}
else {
    $("#textarea2pm").addClass("past");
    console.log("Past")
    console.log(timeslot2pm)
}

var timeslot3pm = new Date();
timeslot3pm.setHours(15, 0, 0)
$("#3pm").text(moment(timeslot3pm).format("LT"))
if (currentTime <= moment(timeslot3pm).format("LT")) {
    $("#textarea3pm").addClass("future");
    console.log("Future")
    console.log(timeslot3pm)
}
else {
    $("#textarea3pm").addClass("past");
    console.log("Past")
    console.log(timeslot3pm)
}

var timeslot4pm = new Date();
timeslot4pm.setHours(16, 0, 0)
$("#4pm").text(moment(timeslot4pm).format("LT"))
if (currentTime <= moment(timeslot4pm).format("LT")) {
    $("#textarea4pm").addClass("future");
    console.log("Future")
    console.log(timeslot4pm)
}
else {
    $("#textarea4pm").addClass("past");
    console.log("Past")
    console.log(timeslot4pm)
}

var timeslot5pm = new Date();
timeslot5pm.setHours(17, 0, 0)
$("#5pm").text(moment(timeslot5pm).format("LT"))
if (currentTime <= moment(timeslot5pm).format("LT")) {
    $("#textarea5pm").addClass("future"); 
    console.log("Future")
    console.log(timeslot5pm)
}
else {
    $("#textarea5pm").addClass("past");
    console.log("Past")
    console.log(timeslot5pm)
}
