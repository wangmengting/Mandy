$(function(){

        //轮播
function lunbo(jiangeshijian,yundongshijian,tupiankuandu){
    var nowimg = 0; 

    $(".lb ul li").eq(0).clone().appendTo(".lb ul");

    // ******定时器********
    var timer = setInterval(youanniuyewu,jiangeshijian);

    $(".lb").mouseenter(
        function(){
            clearInterval(timer);
        }
    );

    $(".lb").mouseleave(
        function(){
            clearInterval(timer);
            timer = setInterval(youanniuyewu,jiangeshijian);
        }
    );
    //******定时器*******

    function youanniuyewu(){
        if(!$(".lb ul").is(":animated")){
            if(nowimg < $(".lb ul li").length - 2){
                nowimg = nowimg + 1;
                huan();
            }else{
                nowimg = 0;
                
                $(".lb ul").animate(
                    {
                        "left":-tupiankuandu * ($(".lb ul li").length - 1)
                    }
                    ,yundongshijian
                    ,function(){
                        $(".lb ul").css("left",0);
                    }
                );
                
                $(".lb .dianul span").eq(nowimg).addClass("cur").siblings().removeClass("cur");
            }
        }
    }

    $(".lb .dianul span").click(
        function(){
            if(!$(".lb ul").is(":animated")){
                nowimg = $(this).index();
                huan();
            }
        }
    );

    function huan(){
        $(".lb ul").animate(
            {
                "left":nowimg * -tupiankuandu
            }
        ,yundongshijian);

        $(".lb .dianul span").eq(nowimg).addClass("cur").siblings().removeClass("cur");
    }
}

lunbo(3000,500,544);

		var layH=$("body").height();
		$(".lay").css("height",layH);

        $(".vedio-box").click(function(){
            $(".lay,.g-videoPop").fadeIn();
        }); 		

        $(".package-box .swiper-slide").click(function(){
			$(".lay,.tk").fadeIn();
		});		

		$(".closeVideo,.x").click(function(){
			$(".lay,.g-videoPop,.tk").fadeOut();
		});
	})
  var mySwiper = new Swiper('.swiper-container',{
    mousewheelControl : true,
    slidesPerView: 3
  })
  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })

    var mySwiper02 = new Swiper('.swiper-container02',{
        pagination: '.pagination',
        mousewheelControl : true,
        paginationClickable :true,
        mode: 'vertical',
        slidesPerView: 3
  })