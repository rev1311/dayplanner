$(document).ready(function () {
var moment = require('moment');
var today = moment().format();

var currentTime = moment().day().date().hour().minute();

$(".today").append(currentTime);



})