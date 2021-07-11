$(document).ready(function(){
  $("#currentDay").text(moment().format('LLLL'))
})

function updateTime() {
  var now = moment();
  $('#currentDay').text(now.format('dddd MMMM Do, YYYY hh:mm a'));
}

setInterval(updateTime, 1000);
updateTime();

$(document).ready(function(){
  $('.saveBtn').on('click', function(){
    var toDo = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, toDo);
  })
})

function getTime() {
  var currentTime = moment().hour();
  $('.time-block').each(function () {
    var hourBox = parseInt($(this).attr('id').split('hour')[1]);
    if (hourBox < currentTime) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');
    }
    else {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    }
  })
}

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
getTime();