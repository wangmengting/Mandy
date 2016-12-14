
 var  oBox = document.getElementById("page1");
 var  oDiv = document.getElementById("slider");

 var startX = 0 ,startY = 0 ,moveEndX = 0 ,moveEndY = 0 ,disX = 0 ,disY = 0 ,oldX = 0,oldY = 0;


function start(e){
   oDiv.style.transition="none";
   e.preventDefault();
   startX = e.changedTouches[0].clientX;
   startY = e.changedTouches[0].clientY;
   oldX = parseInt(getComputedStyle(this,null).left);
   oldY = parseInt(getComputedStyle(this,null).top);
}

function move(e){
   e.preventDefault();
   moveEndX = e.changedTouches[0].clientX;
   moveEndY = e.changedTouches[0].clientY;
   disX = moveEndX - startX;
   disY = moveEndY - startY;
   if ( Math.abs(disX) > Math.abs(disY) && disX > 0 ) {  
        // console.log(disX);
        if(disX >= 150){ 
          // disX = 420,
          $("#v1")[0].play();

        setTimeout(function (){
          $(".page1,.page1-con").hide();
        },200)

        }
        this.style.left = (oldX+disX) + "px";
   }
}
//   $("#v1")[0].addEventListener("canplay",function(evt) {
//     alert("我准备好了");
//   });  
// $("#v1")[0].onloadstart=alert("我在加载了");

  oDiv.addEventListener("touchstart",start,false);
  oDiv.addEventListener("touchmove",move,false);

  oDiv.addEventListener("touchend",function(){
     if(disX < 320){
       oDiv.style.left="50px";
       oDiv.style.transition="left 1s";
     }
  },false);

//播放完毕
$("#v1")[0].addEventListener("ended",function(evt) {
  $(".page2").hide();
  $(".page3").addClass("show-end");
});

