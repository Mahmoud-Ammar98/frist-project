$(function () {
    "use strict";

    var winH = $(window).height(),
        barH = $('.upper-bar').innerHeight(),
        logoH = $('.logo').innerHeight();

       $(".home").height(winH-(barH+logoH));
       $(".black-color").height(winH-(barH+logoH));
       
  // featured     

       $('.featured ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all'){
            $('.shufle .col-sm').css('opacity', '1');
        } else {
            $('.shufle .col-sm').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity' , '1');
        }
    });
});



