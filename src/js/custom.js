$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
});

$(document).ready(function(){
  $("#home-sec, .header-mask").animate({
                height: '+=150px',
              }, 3000);
            });
