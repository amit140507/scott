$('.count').each(function () {
    $(this).prop('keyfigure',0).animate({
        Counter: $(this).text()
    }, {
      
      //chnage count up speed here
        duration: 7000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});