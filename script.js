$(document).ready(function(){

var timeSlot = [
    {time: "09:00",
    slot: "slot09",
    save: "save09"},

    {time: "10:00",
    slot: "slot10",
    save: "save10"},

    {time: "11:00",
    slot: "slot11",
    save: "save11"},

    {time: "12:00",
    slot: "slot12",
    save: "save12"},

    {time: "13:00",
    slot: "slot13",
    save: "save13"},

    {time: "14:00",
    slot: "slot14",
    save: "save14"},

    {time: "15:00",
    slot: "slot15",
    save: "save15"},

    {time: "16:00",
    slot: "slot16",
    save: "save16"},

    {time: "17:00",
    slot: "slot17",
    save: "save17"}];

//Date and time
$("#currentDay").append(Date($.now()));

//loads time, inputs, and save btns
for (var i = 0; i < timeSlot.length; i++) {
    var timeDiv = $("<div>");
    timeDiv.text(timeSlot[i].time);
    timeDiv.addClass("col-md-2 hour");
    $("#timeTable").append(timeDiv);

    var inputDiv = $("<input>");
    inputDiv.addClass("col-md-9 input time-block");
    inputDiv.text(timeSlot[i].event);
    inputDiv.attr("id", timeSlot[i].slot);
    $("#timeTable").append(inputDiv);

    var saveBtnDiv = $("<button>");
    saveBtnDiv.addClass("col-md-1 saveBtn");
    saveBtnDiv.text("Save");
    saveBtnDiv.attr("id", timeSlot[i].save);
    $("#timeTable").append(saveBtnDiv);
}

//saves to local storage on button click
$(".saveBtn").on("click", function(){
    $(".input").each(function(){    
        var id = $(this).attr("id");
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

//load from local storage


});