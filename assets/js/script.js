$(document).ready(function() {

    var hoursArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    var now = moment().format("dddd, MMMM DDDo");
    $("#currentDay").text(now);
    
    var newDiv=$('<div>');
    
    for (var i=0; i<9; i++){
        newDiv.clone().appendTo('#main').addClass('row time-block');
    }

    var newButton=$('<button>');
    var newTextArea=$('<textarea>');
    
    newDiv.clone().appendTo('.row').addClass('col-2 col-lg-1 hour');
    newTextArea.clone().appendTo('.row').addClass('col-8 col-lg-10 text-area');
    newButton.clone().appendTo('.row').addClass('col-2 col-lg-1 fas fa-save saveBtn');
    
    
    var idArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    for (i = 0; i < hoursArr.length; i++) {
            $('.hour').eq(i).append(hoursArr[i]).attr('id', idArr[i]);
            $('.text-area').eq(i).attr('id', idArr[i]).val(localStorage.getItem(idArr[i]));
    }
    
    $(".saveBtn").on("click", function () {

    var eventText = $(this).siblings(".text-area").val();
    var timeEl = $(this).siblings(".hour").attr("id");
    localStorage.setItem(timeEl, eventText);
    });
    
    function timeCheck(){
    $('.time-block').each(function () {
      var hourNow = moment().format("k");
      var hourIndex = parseInt($(this).children().attr("id"));
      if(hourIndex < hourNow){
       $(this).addClass('past');
      }
      if(hourIndex == hourNow){
        $(this).addClass('present');
      }if(hourIndex > hourNow){
        $(this).addClass('future');
      }
      console.log(hourNow, hourIndex);
    });
    }
    localStorage.getItem('idArr[i]');
    timeCheck();
    });