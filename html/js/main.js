$(document).ready(function(){
  
  
  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  
  
  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  
  //------------------------------------//
  //Wow Animation//
  //------------------------------------// 
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();


	
});



//각각의 section에서 마우스를 움직이면
	$("section").on("mousemove",function(e){		
	
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;
		
		//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p11").css({"right":20-(posX/30) , "bottom":20-(posY/30) });
		$(".p12").css({"right":130+(posX/20) , "bottom":-40+(posY/20) });
		$(".p13").css({"right":60+(posX/20) , "top":180+(posY/20) });		
	
		//두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p21").css({"right":-180-(posX/30) , "bottom":-480-(posY/30) });
		$(".p22").css({"right":130+(posX/50) , "bottom":-40+(posY/50) });
		
		//세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p31").css({"right":280-(posX/30) , "bottom":30-(posY/30) });
		$(".p32").css({"right":110+(posX/20) , "bottom":-270+(posY/20) });
		$(".p33").css({"right":-70+(posX/20) , "bottom":-130+(posY/20) });	
		
		//네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p41").css({"right":20-(posX/30) , "bottom":-120-(posY/30) });
		$(".p42").css({"right":0+(posX/20) , "bottom":-180+(posY/20) });	
	});