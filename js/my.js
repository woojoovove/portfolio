
$(function () {
  
  var page = 1;

  // 페이지 오른쪽 넘김

 


  $('.btn-right').on('click', function () {
    
    if (page == 1) {
      
      page++;

      $('.first-content').animate({width: "0px"} , 500, function() {
        $('.first-content').css({opacity: 0});
      });
      
      $('.btn-right').css({opacity: 0.5});

      setInterval(function() {
        
        $('.btn-right').css({opacity: 1});
    
      }, 300);

    } else if (page == 2) {

      page++;
      
      $('.second-content').animate({width: "0px"} , 500, function() {
        $('.second-content').css({opacity: 0});
      });
      
      $('.btn-right').css({opacity: 0.5});

      setInterval(function() {
        
        $('.btn-right').css({opacity: 1});
    
      }, 300);

    } 
    
    else if (page == 3) {
      
      $('.btn-right').css({opacity: 0.5});

      setInterval(function() {
        
        $('.btn-right').css({opacity: 1});

      }, 300);
    }

  });

  //페이지 왼쪽 넘김

  $('.btn-left').on('click', function () {
    
    if (page == 1) {
      
      $('.btn-left').css({opacity: 0.5});

      setInterval(function() {
        
        $('.btn-left').css({opacity: 1});
        
      }, 300);
      
    } else if (page == 2) {

      page--;

      $('.first-content').css({opacity: 1});
      $('.first-content').animate({width: "870px"} , 500);

      $('.btn-left').css({opacity: 0.5});

      setInterval(function() {
        
        $('.btn-left').css({opacity: 1});
    
      }, 300);

    } else if (page == 3) {
      
      page--;

      $('.second-content').css({opacity: 1});
      $('.second-content').animate({width: "870px"} , 500);
      
      $('.btn-left').css({opacity: 0.5});

      setInterval(function() {
        
        $('.btn-left').css({opacity: 1});
    
      }, 300);
    }

  });

  // 닫기 버튼 페이지 리셋

  $('.close').on('click', function() {

    
    $('.first-content').css({opacity: 1});
    $('.first-content').animate({width: "870px"} , 500);
    
    page = 1;

  });

  // 상단 메뉴 바 클릭시 색 변경

  var address = location.href.split('/');

  if(address[address.length-1] == "index.html") $(".main-nav li").eq(0).attr('class', 'active');
  if(address[address.length-1] == "resume.html") $(".main-nav li").eq(1).attr('class', 'active');
  if(address[address.length-1] == "portfolio.html") $(".main-nav li").eq(2).attr('class', 'active');
  if(address[address.length-1] == "blog.html") $(".main-nav li").eq(3).attr('class', 'active');
  if(address[address.length-1] == "contact.html") $(".main-nav li").eq(4).attr('class', 'active');
  
});