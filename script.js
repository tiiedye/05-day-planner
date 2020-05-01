$(document).ready(function(){

var timeSlot = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {}

//Date and time
$("#currentDay").append(Date($.now()));
const date = new Date();
const hour = date.getHours();

//loads time, inputs, and save btns
for (var i = 9; i < 18; i++) {
    var row = $("<row>");
    row.addClass("row");
    $("#headtable").append(row);

    var timeDiv = $("<div>");
    timeDiv.text(`${i}:00`);
    timeDiv.addClass("col-md-1 hour");
    $("#timeTable").append(timeDiv);

    var inputDiv = $("<textarea>");
    inputDiv.addClass(`col-md-10 input textarea ${i<hour? 'past' : i>hour? 'future': 'present'}`);
    inputDiv.text(timeSlot[i]|| "");
    inputDiv.attr("id", `todo${i}`);
    $("#timeTable").append(inputDiv);

    var saveBtnDiv = $("<button>");
    saveBtnDiv.addClass("col-md-1 saveBtn");
    saveBtnDiv.text("Save");
    saveBtnDiv.attr("id", i);
    $("#timeTable").append(saveBtnDiv);
}

//saves to local storage on button click
$(".saveBtn").on("click", function(){
        var id = $(this).attr("id");
        var value = $(this).siblings("textarea").val()
        timeSlot[id] = value
       localStorage.setItem('todos', JSON.stringify(timeSlot));
});   

});