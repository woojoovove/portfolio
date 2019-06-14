$(function () {
    $(".openModal").click(function(){
      setTimeout(function(){
        var h=$(".modal-body .first-content p").height();
        $(".modal-body").css('height',h+80+'px');
        $(".modal-body .first-content p").css('height',h+'px');
      },250);
    });
    $('.first-button').on('click', function () {
      $('.first-content').animate({width:"toggle"}, function(){
        $('.second-content').animate({width:"toggle"});
          var h=$(".modal-body .second-content p").height();
          $(".modal-body").css('height',h+80+'px');
          $(".modal-body .second-content p").css('height',h+'px');
        });
    });
    $('.second-button').on('click', function () {
      $('.second-content').animate({width:"toggle"},function(){
        $('.first-content').animate({width:"toggle"});
          var h=$(".modal-body .first-content p").height();
          $(".modal-body").css('height',h+80+'px');
          $(".modal-body .first-content p").css('height',h+'px');
      });
    });
  });