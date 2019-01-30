$(document).ready(function() {
    
                 //controlling the carousel buttons
                //  $('#mycarousel').carousel({interval: 2000});
                //  $('#carousel-pause').click(function () {
                //      $('#mycarousel').carousel('pause');
                //  });
    
                //  $('#carousel-play').click(function(){
                //      $('#mycarousel').carousel('cycle');
                //  });
    
                $('#login').click(function () {
                    $('#loginModal').modal();
                })
                $('#reserveButton').click(function () {
                    $('#reservation').modal(); 
                })
    
                $('#mycarousel').carousel({interval: 2000});
                  $('#carouselButton').click(function () {
                      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
                          $('#mycarousel').carousel('pause');
                          $('#carouselButton').children('span').removeClass('fa-pause');
                          $('#carouselButton').children('span').addClass('fa-play');
                      }
                      else if ($('#carouselButton').children('span').hasClass('fa-play')) {
                        $('#mycarousel').carousel('cycle');
                        $('#carouselButton').children('span').removeClass('fa-play');
                        $('#carouselButton').children('span').addClass('fa-pause')
                    }
                });
            });