
var LyEvent={};

var IsPC=function()  {  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
	   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
}   

LyEvent.MOUSE_DOWN="mousedown";
LyEvent.MOUSE_UP="mouseup";
LyEvent.MOUSE_MOVE="mousemove";
LyEvent.MOUSE_OVER="mouseover";
LyEvent.MOUSE_OUT="mouseout";
if(!IsPC()){
	LyEvent.MOUSE_DOWN="touchstart";
	LyEvent.MOUSE_UP="touchend";
	LyEvent.MOUSE_MOVE="touchmove";
}

LyEvent.addEventListener = function (o, t, f, b) {
	if (b == null) {
		b = false;
	}

	if (o.addEventListener) {
		o.addEventListener(t, f, b);
		return true;
	} else if (o.attachEvent) {
		o.attachEvent("on" + t, f);
		return true;
	}
};

var MVelems=[],
	Evlist=[];
	
function MVfun(o,d){
	this.top=null;
	this.lef=null;
	this.right=null;
	this.bottom=null;
	this.down=null;
	this.move=null;
	this.up=null;
	this.pdefault=d;
	this.e=o;
	this.addListen=function(){
		var _s=this;
		var dx=0,
			dy=0,
			mx=0,
			my=0,
			mvalx=0,
			mvaly=0,
			_cz=50;
		LyEvent.addEventListener(_s.e,LyEvent.MOUSE_DOWN,function(e){
				e=e||window.event;
				if(!IsPC()){
					dx=mx=e.targetTouches[0].pageX;
					dy=my=e.targetTouches[0].pageY;
				}else{
					dx=mx=e.clientX;
					dy=my=e.clientY;
				}
				
				if(typeof _s.down === "function")
				_s.down(e,_s.e);
				
				if(_s.pdefault){
					e.preventDefault();
					e.stopPropagation()
				}
			});
		LyEvent.addEventListener(_s.e,LyEvent.MOUSE_MOVE,function(e){
				e=e||window.event;
				if(!IsPC()){
					mx=e.targetTouches[0].pageX;
					my=e.targetTouches[0].pageY;
				}else{
					mx=e.clientX;
					my=e.clientY;
				}
				if(typeof _s.move === "function")
				_s.move(mx-dx,my-dy);
				
				if(_s.pdefault){
					e.preventDefault();
					e.stopPropagation()
				}
			});
		LyEvent.addEventListener(_s.e,LyEvent.MOUSE_UP,function(e){
			e=e||window.event;
			mvalx=mx-dx;
			mvaly=my-dy;
			if(Math.abs(mvalx)>=Math.abs(mvaly)){
				if(mvalx>=_cz){
					if(typeof _s.right === "function")
					_s.right(_s.e);
				}else if(mvalx<=-_cz){
					if(typeof _s.left === "function")
					_s.left(_s.e);
				}
			}else{
				if(mvaly>=_cz){
					if(typeof _s.bottom === "function")
					_s.bottom(_s.e);
				}else if(mvaly<=-_cz){
					if(typeof _s.top === "function")
					_s.top(_s.e);
				}
			}
			
			if(typeof _s.up === "function")
			_s.up(e,_s.e);
			
			if(_s.pdefault){
				e.preventDefault();
				e.stopPropagation()
			}
			
		});
	}
	
	this.removeEvent=function(){
		var _s=this;
		_s.top=null;
		_s.lef=null;
		_s.right=null;
		_s.bottom=null;
		_s.down=null;
		_s.up=null;
	}
	
}

function LyeventMove(o,d){
	for(var i=0; i<MVelems.length; i++){
		if(MVelems[i]==o)
		return Evlist[i];
	}
	MVelems.push(o);
	var Ev=new MVfun(o,d);
	Evlist.push(Ev);
	Ev.addListen();
	return Ev;
}