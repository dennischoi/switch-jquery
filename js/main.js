$(document).on('ready', function() {
  alert('READY')

  $("button").on('click', function() {
    if ($("button").hasClass('on')){
      $("button").removeClass('on').addClass('off');
      $("body").removeClass('dark').addClass('light');
      $(".status").html("It's so bright in here!")
    }else if ($("button").hasClass('off')){
      $("button").removeClass('off').addClass('on');
      $("body").removeClass('light').addClass('dark');
      $(".status").html("It's so dark in here!")
    }
  });



});
