$(document).ready(function () {
  const day = dayjs();
  const date = $('#currentDay');
  const currentHour = dayjs().hour();
  const formattedTime = day.format('MM-DD-YY HH:mm');

  $('div[time]').each(function() {
    let hour = parseInt($(this).attr('time'), 10);

    hour == currentHour ? $(this).addClass('present') 
    : hour > currentHour ? $(this).addClass('future')
    : $(this).addClass('past');
  });

  date.text(formattedTime);

  $('.saveBtn').click(function() {
    let timeBlock = $(this).parent().attr("id");
    let hour = timeBlock.split("-")[1];
    let description = $(this).siblings(".description").val();
    
    localStorage.setItem("hour " + hour, description);
  });


});


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

