$(document).ready(function () {
  const day = dayjs();
  const date = $('#currentDay');
  const currentHour = dayjs().hour();
  const formattedTime = day.format('MM-DD-YY HH:mm');

  // gets time attribute and turns it to an integer. if integer is greater, lesser, or equal to current hour from dayjs, add sepcified class
  $('div[time]').each(function() {
    let hour = parseInt($(this).attr('time'), 10);

    hour == currentHour ? $(this).addClass('present') 
    : hour > currentHour ? $(this).addClass('future')
    : $(this).addClass('past');
  });

  // renders the month, day, year, and current time
  date.text(formattedTime);

  // saves text when the button for the corresponding area is clicked
  $('.saveBtn').click(function() {
    let hour = $(this).parent().attr("id").split("-")[1];
    let description = $(this).siblings(".description").val();
    
    localStorage.setItem("hour " + hour, description);
  });

  // function to display text saved in local storage with the corresponding key from the elements id
  function showDay() {
    $(".time-block").each(function() {
      var hour = $(this).attr("id").split("-")[1];
      var eventText = localStorage.getItem("hour " + hour);
      $(this).find(".description").val(eventText);
    });
  };

  // function call to render saved agenda items
  showDay();
});