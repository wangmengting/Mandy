var main={};

main.init = function(){//页面初始化

     var loading_loading = new MF_Loading({
		LDpage:false,
		LDtween:false,
		LDsuccess:function(){
           main.loading_page();  //loading 页 加载完成 开始加载 页面
		}
	});
    
   loading_loading.add({type:"img",src:"img/bg_1.jpg"});
   loading_loading.add({type:"img",src:"img/wave.png"});
   loading_loading.add({type:"img",src:"img/bg_1.jpg"});
   loading_loading.add({type:"img",src:"img/loading_img.png"});
   loading_loading.add({type:"img",src:"img/mask.png"});

   loading_loading.start();//开始加载
};

main.loading_page = function(){
    var loading=new MF_Loading({
		LDpage:true,
		LDtween:true,
		LDup:function(a){
			main.Id("load_txt").innerHTML = a+"%";
			main.Id("wave_height").style.height =  251*a/100 +"px";
		},
		LDsuccess:function(){
           TweenMax.to(".page_1",1,{opacity:0,display:"none"});
           TweenMax.to(".page_2",1,{opacity:1,display:"block"});
            
            main.TabPage();  //调用页面显示 上下滑动
		}
	});

    //添加图片播放帧  
	var list1=loading.addImgSheet({imgPrefix:"img/1/",imgType:"jpg",start:1,length:43,step:1});
	var list2=loading.addImgSheet({imgPrefix:"img/2/",imgType:"jpg",start:1,length:41,step:1});
	var list3=loading.addImgSheet({imgPrefix:"img/3/",imgType:"jpg",start:1,length:51,step:1});
	var list4=loading.addImgSheet({imgPrefix:"img/4/",imgType:"jpg",start:1,length:51,step:1});
	var list5=loading.addImgSheet({imgPrefix:"img/5/",imgType:"jpg",start:1,length:51,step:1});
	var list6=loading.addImgSheet({imgPrefix:"img/6/",imgType:"jpg",start:1,length:51,step:1});
	
    loading.addEventListener("complete",function(){

             // 图片帧 1 
			var animateImg1=new MF_animateSheet({
				parents:document.getElementById("animate1"),
				type:"img",
				//widht:100,
				//height:500,
				imgList:list1,
				step:1,
				times:100,
				loop:false
			});
			
			LyeventMove(main.Id("btnimg1")).down=function(){
	            animateImg1.play();
	            TweenMax.to(".btnimg1",1,{opacity:0,display:"none"});
            }
            
			animateImg1.addEventListener("complete",function(){
				console.log("1播放完成");
				
                var T1 = new TimelineMax();
                    T1.to(".imglist_1",1,{display: "none",opacity: 0,onComplete:function(){
                    	  animateImg1.clear();
                    }});
                    T1.to(".imglist_2",1,{display: "block",opacity: 1},"-=1");
                    T1.to("#btnimg2",1,{display: "block",opacity: 1,onComplete:function(){
                    	  LyeventMove(main.Id("btnimg2")).down=function(){
	                  			animateImg2.play();
	                  			T1.to("#btnimg2",1,{display: "none",opacity: 0});
                		  }
                    }});
			});


             // 图片帧 2 
			var animateImg2=new MF_animateSheet({
				parents:document.getElementById("animate2"),
				type:"img",
				//widht:100,
				//height:500,
				imgList:list2,
				step:1,
				times:100,
				loop:false
			});


			 animateImg2.addEventListener("complete",function(){
					console.log("2播放完成");

                    var T2 = new TimelineMax();
                        T2.to(".imglist_2",1,{display: "none",opacity: 0,onComplete:function(){
                        	  animateImg2.clear();
                        }});
                        T2.to(".imglist_3",1,{display: "block",opacity: 1},"-=1");
                        T2.to("#btnimg3",1,{display: "block",opacity: 1,onComplete:function(){
                           LyeventMove(main.Id("btnimg3")).down=function(){
	                      		animateImg3.play();
	                      		T2.to("#btnimg3",1,{display: "none",opacity: 0});
                           }
					    }});
			});

			 
			 // 图片帧 3 
			var animateImg3=new MF_animateSheet({
				parents:document.getElementById("animate3"),
				type:"img",
				//widht:100,
				//height:500,
				imgList:list3,
				step:1,
				times:100,
				loop:false
			});

			animateImg3.addEventListener("complete",function(){
					console.log("3播放完成");
                    var T3 = new TimelineMax();
                    T3.to(".imglist_3",1,{display: "none",opacity: 0,onComplete:function(){
                    	  animateImg3.clear();
                    }});
                    T3.to(".imglist_4",1,{display: "block",opacity: 1},"-=1");
                    T3.to("#animate4",1,{opacity: 1});
                    T3.to("#btnimg4",2,{display: "block",opacity: 1,onComplete:function(){
                    	  TweenLite.set("#btnimg4", {className: '-=cur'});
                    	  LyeventMove(main.Id("btnimg4")).down=function(){
	                  			animateImg4.play();
	                  			T3.to("#btnimg4",1,{display: "none",opacity: 0});
                		  }
                    }},"-=1");
                    T3.to("#btnimg4 .line_1",1,{display: "none"},"-=1");
			});

			 // 图片帧 4 
			var animateImg4=new MF_animateSheet({
				parents:document.getElementById("animate4"),
				type:"img",
				//widht:100,
				//height:500,
				imgList:list4,
				step:1,
				times:100,
				loop:false
			});

			 animateImg4.addEventListener("complete",function(){
					console.log("4播放完成");
                    var T4 = new TimelineMax();
                    T4.to(".imglist_4",1,{display: "none",opacity: 0,onComplete:function(){
                    	  animateImg4.clear();
                    }});
                    T4.to(".imglist_5",1,{display: "block",opacity: 1},"-=1");
                    T4.to("#btnimg5",1,{display: "block",opacity: 1,onComplete:function(){
                    	  LyeventMove(main.Id("btnimg5")).down=function(){
	                  			animateImg5.play();
	                  			T4.to("#btnimg5",1,{display: "none",opacity: 0});
                		  }
                    }});
			});

			// 图片帧 5 
			var animateImg5=new MF_animateSheet({
				parents:document.getElementById("animate5"),
				type:"img",
				//widht:100,
				//height:500,
				imgList:list5,
				step:1,
				times:100,
				loop:false
			});

			 animateImg5.addEventListener("complete",function(){
				console.log("5播放完成");

				var T5 = new TimelineMax();
                     T5.to(".imglist_5",1,{display: "none",opacity: 0,onComplete:function(){
                     	  animateImg5.clear();
                     }});
                     T5.to(".imglist_6",1,{display: "block",opacity: 1},"-=1");
                     T5.to("#animate6",1,{opacity: 1});
                     T5.to("#btnimg6",2,{display: "block",opacity: 1,onComplete:function(){
					   TweenLite.set("#btnimg6", {className: '-=cur'});
                        LyeventMove(main.Id("btnimg6")).down=function(){
	                   		animateImg6.play();
	                   		T5.to("#btnimg6",1,{display: "none",opacity: 0});
                        }

				    }},"-=1");
                     T5.to("#btnimg6 .line_2",1,{display: "none"},"-=1");
			});


			// 图片帧 6 
			var animateImg6=new MF_animateSheet({
				parents:document.getElementById("animate6"),
				type:"img",
				//widht:100,
				//height:500,
				imgList:list6,
				step:1,
				times:100,
				loop:false
			});

			 animateImg6.addEventListener("complete",function(){
					console.log("6播放完成");
                    animateImg6.pause();
			});
			
	}); // loading 成功后
	
	loading.add({type:"img",src:"img/5_1.png"});
    loading.add({type:"img",src:"img/6_1.png"});
    loading.add({type:"img",src:"img/8_1.png"});
    loading.add({type:"img",src:"img/9_1.png"});
    loading.add({type:"img",src:"img/10_2.png"});
    loading.add({type:"img",src:"img/11_1_2.png"});

	loading.start();//开始加载

	main.events(); //调用配置事件
};

// 获取 ID
main.Id = function(id){
	 return typeof id ==="string"?document.getElementById(id):id;
};

// 定义开关
main.ON = true;

//页面显示 上下滑动
main.TabPage = function(){
	var aPage = main.Id("content").getElementsByClassName("page");
	var now = 1;

	    LyeventMove(main.Id("content")).top=function(){
	        if(main.ON){
                if(now >= 7){
                	now = 7;
                }else{
                   TweenMax.to(aPage[now],1,{opacity:0,display:"none"});
           		   TweenMax.to(aPage[now+1],1,{opacity:1,display:"block"});
           		   if(now == 6 ){TweenMax.to("#arrow_1",1,{opacity:0,display:"none"});}
                   now++;	
                }
	        }else{
	        	now = 6;
	        }	
	    };
	
	    LyeventMove(main.Id("content")).bottom=function(){
           if(main.ON){

             	if(now <=1){
             		now = 1;
             	}else{
             		TweenMax.to(aPage[now],1,{opacity:0,display:"none"});
           	 		TweenMax.to(aPage[now-1],1,{opacity:1,display:"block"});
	       	 		TweenMax.to("#arrow_1",1,{opacity:1,display:"block"});
             		now--;
             	}
           }else{
           	 now = 6;
           }
	    };
};

//配置 函数 1
main.fn1 = function(btn,box1,box2){
    LyeventMove(main.Id(btn)).down=function(){
		TweenMax.to(box1,1,{opacity:0,display:"none"});
		TweenMax.to(box2,1,{opacity:1,display:"block"});
    }
};

//配置 函数 2
main.fn2 = function(btn,src){
    LyeventMove(main.Id(btn)).down=function(){
		TweenMax.to(".popup_box",1,{opacity:1,display:"block"});
		main.Id("t_1").src = "img/"+src+".jpg";
	}
};


//配置 函数 3
main.fn3 = function(btn,box1){
    LyeventMove(main.Id(btn)).down=function(){
		TweenMax.to(".page_12_box",1,{opacity:0,display:"none"});
		TweenMax.to(box1,1,{opacity:1,display:"block"});
		TweenMax.set("#arrow_1",{display:"none"});
		main.ON = false;
    }
};

//配置 函数 4
main.fn4 = function(btn,box1){
    LyeventMove(main.Id(btn)).down=function(){
		TweenMax.to(box1,1,{opacity:0,display:"none"});
		TweenMax.to(".page_12_box",1,{opacity:1,display:"block"});
		TweenMax.set("#arrow_1",{display:"block"});
		main.ON = true;
	}
};


//配置事件
main.events = function(){

//点击关闭按钮
main.fn1("close",".popup_box",".close");

//点击 按钮 7
main.fn1("btnimg7",".btnimg7",".page_11_boxs");


//点击动态营养按钮
main.fn2("btn_15_1","t_1");

//点击严选原料按钮
main.fn2("btn_15_2","t_2");

//点击特别添加按钮
main.fn2("btn_15_3","t_3");

//点击蔗糖按钮
main.fn2("btn_15_4","t_4");

//点击冲调机器按钮
main.fn3("btn_12_3",".page_13_box");

//点击配方按钮
main.fn3("btn_12_4",".page_14_box");

//点击冲调机器里的返回按钮
main.fn4("back_1",".page_13_box");

//点击胶囊配方里的返回按钮
main.fn4("back_2",".page_14_box");

};