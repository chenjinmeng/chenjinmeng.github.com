// JavaScript Document
	function arcYuan(id,lineWidth,cx,cy,r,deg){
		var oC=document.getElementById(id);
		var gd=oC.getContext("2d");
		//gd.arc(cx,cy,r,弧度,false)
		gd.beginPath();
		var i=0;
		gd.lineWidth=lineWidth;
		var cx=cx;
		var cy=cy;
		var r=r;
		var str="0%";
		gd.font="50px kaiti";
		
		gd.fillStyle="#2d2d2d";
		gd.strokeStyle="#26f0fd";
		var timer=setInterval(function(){
			var w=gd.measureText(str).width;
			gd.clearRect(0,0,oC.width,oC.height);
			gd.fillText(str,cx-w/2,cy+15);
			gd.arc(cx,cy,r,rnd(i),rnd(i+1),false);
			gd.stroke();
			str=((i/360)*100).toFixed()+"%";
			i++;
			if(i>deg){
				clearInterval(timer);
			}
		},10)
	}
	function rnd(n){
		return n*Math.PI/180;
	}
