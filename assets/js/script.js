$("#saveBtn").click(function () {
    //local storage
})

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

console.log(moment().set('month', 3))

$(textarea1).addClass(".present");

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

//   $("#textarea1").val(localStorage.getItem ("abc")); //Get
//   localStorage.setItem ($("#textarea1").val());