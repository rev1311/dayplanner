$(document).ready(function () {


// moment js time/date
$("#currentDay").append(moment().format('dddd MMMM Do'));


liveTime();

function liveTime() {
var hoursChange = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

  var currentTime = moment().format('H');
  for(var i = 0; i < hoursChange.length; i++) {
    if (parseInt(hoursChange[i]) > currentTime) {
      $(`#${hoursChange[i]}`).attr("class", "future");
    } else if (parseInt(hoursChange[i]) < currentTime) {
      $(`#${hoursChange[i]}`).attr("class", "past");
    } else if (parseInt(hoursChange[i]) == currentTime) {
      $(`#${hoursChange[i]}`).attr("class", "present");
    
    }
  }
}


// pull local storage, button onclick, save to local storage

$("#9").append(JSON.parse(localStorage.getItem("data9Id")));

$(".saveBtn").on("click", function() {
  var data9 = $("#9").val();

  localStorage.setItem("data9Id", JSON.stringify(data9));
});


$("#10").append(JSON.parse(localStorage.getItem("data10Id")));

$(".saveBtn").on("click", function() {
  var data10 = $("#10").val();

  localStorage.setItem("data10Id", JSON.stringify(data10));
});


$("#11").append(JSON.parse(localStorage.getItem("data11Id")));

$(".saveBtn").on("click", function() {
  var data11 = $("#11").val();

  localStorage.setItem("data11Id", JSON.stringify(data11));
});


$("#12").append(JSON.parse(localStorage.getItem("data12Id")));

$(".saveBtn").on("click", function() {
  var data12 = $("#12").val();

  localStorage.setItem("data12Id", JSON.stringify(data12));
});


$("#13").append(JSON.parse(localStorage.getItem("data13Id")));

$(".saveBtn").on("click", function() {
  var data13 = $("#13").val();

  localStorage.setItem("data13Id", JSON.stringify(data13));
});


$("#14").append(JSON.parse(localStorage.getItem("data14Id")));

$(".saveBtn").on("click", function() {
  var data14 = $("#14").val();

  localStorage.setItem("data14Id", JSON.stringify(data14));
});


$("#15").append(JSON.parse(localStorage.getItem("data15Id")));

$(".saveBtn").on("click", function() {
  var data15 = $("#15").val();

  localStorage.setItem("data15Id", JSON.stringify(data15));
});


$("#16").append(JSON.parse(localStorage.getItem("data16Id")));

$(".saveBtn").on("click", function() {
  var data16 = $("#16").val();

  localStorage.setItem("data16Id", JSON.stringify(data16));
});


$("#17").append(JSON.parse(localStorage.getItem("data17Id")));

$(".saveBtn").on("click", function() {
  var data17 = $("#17").val();

  localStorage.setItem("data17Id", JSON.stringify(data17));
});


});
