// JavaScript Document


function addMouseWheel(obj,fn){
	//判断浏览器是不是火狐
	if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		obj.addEventListener('DOMMouseScroll',fnwheel,false)
	}else{
		obj.onmousewheel=fnwheel;
	}
	
	function fnwheel(ev){
		var oEvt=ev ||event;
		var down=true;
		if(oEvt.wheelDelta){
			down=oEvt.wheelDelta<0? true:false;
		}else{
			down=oEvt.detail>0? true : false;	
		}
		//console.log(down)
		
		fn && fn(down);
		
		oEvt.preventDefault && oEvt.preventDefault();
		return  false;
	}
	
}

