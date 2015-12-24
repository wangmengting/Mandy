

function eggClick(obj) {

    var _this = obj;

if(_this.hasClass("curr")){

            alert("蛋都碎了，别砸了！");

            return false;

        }

        //_this.unbind('click');

        $(".hammer").css({"top":_this.position().top-55,"left":_this.position().left+125});

        $(".hammer").animate({

            "top":_this.position().top-20,

            "left":_this.position().left+50

            },200,function(){

                _this.addClass("curr"); //蛋碎效果

                _this.find("sup").show(); //金花四溅

                $(".hammer").hide();

                $("#result").empty();

                $("#result").hide();

                $('.resultTip').css({display:'none',top:'100px',left:_this.position().left+45,opacity:0}).animate({top: '50px',opacity:1},500,function(){

                    //中奖状态

                var award = [["神仙姐姐",1],["如花",2],["芙蓉姐姐",3],["凤姐",4]];

                var num = 0;

                //几率求和

                for(var i=0;i<award.length;i++){

                    num+=award[i][1];

                }

                var r = 0;

                var award_k='';

                //概率

                for(var i=0;i<award.length;i++){

                  r = randomNum(1,num);

                  if(r<=award[i][1]){

                      award_k=award[i];

                      break;

                   }else{

                      num-=award[i][1];

                  }

                }

                alert(award_k[0]);

                }); 

            }

        );

    

}

//指定范围的随机数

function randomNum(Min,Max){ 

     

    var Range = Max - Min; 



    var Rand = Math.random(); 



    return(Min + Math.round(Rand * Range)); 



} 

    // var click=false;

$(".eggList li").click(function() {
    // if (click) {

    //         return false;

    //     }else{

            eggClick($(this));

            // click=true;

            // return false;

        // }
});



$(".eggList li").hover(function() {

    var posL = $(this).position().left + $(this).width();

    $("#hammer").show().css('left', posL);

})

function wufeng(yusheshijian){
    var zongkuandu = 0;  

    $("#box ul li").each(
        function(){
            zongkuandu = zongkuandu + $(this).outerWidth(true);
        }
    );

    $("#box ul li").clone().appendTo("#box ul");

    dongdong(yusheshijian); 
    function dongdong(yunxingshijian){
        $("#box ul").animate({"left":-zongkuandu},yunxingshijian,"easieLinear",function(){
            $("#box ul").css("left",0);
            dongdong(yusheshijian); 
        });
    }
}
wufeng(15000)
