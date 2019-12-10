$(document).ready(function () {


// moment js time/date
$("#today").text(moment().format('ddd h:mmp'));
$("#date").text(moment().format('MMM DD'));


generateSchedule();


//dynamically populate schedule table
function generateSchedule() {

    var hourArr = ["9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"];

    for ( var i = 0; i < hourArr.length; i++) {
        var tr = $("<tr>").val(hourArr[i]);
        var tdHour = $("<td>").addClass("hour").val(hourArr[i]).text(hourArr[i]);
        var tdInput = $("<td>").addClass("input").val(hourArr[i]);
        var tdSave = $("<td>").addClass("save").val(hourArr[i]);

        var inputTxt = $("<input>").addClass("inputTxt").attr("placeholder", "placeholdertext");
        var save = $("<button>").addClass("btn").text("save");

        $("tbody").append(tr);
        $(tr).append(tdHour, tdInput, tdSave);
        $(tdInput).append(inputTxt);
        $(tdSave).append(save);
    }
}


//button onclick, no clear
$(".btn").on("click", function(event) {
    event.preventDefault();

})


})