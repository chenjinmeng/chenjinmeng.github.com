// JavaScript Document
//减速运动,加速运动,匀速运动
function move(obj,json,opational){
	
	opational=opational || {};
	opational.time=opational.time || 1000;
	opational.fn=opational.fn || null;
	opational.type=opational.type || 'ease-out'
	var start={};
	var dis={};
	//var start=parseInt(getStyle(obj,attr));
	//var dis=iTarget-start;
	var count=Math.round(opational.time/30);
	var n=0;
	
	for(var key in json){
		start[key]=parseFloat(getStyle(obj,key));
		dis[key]=json[key]-start[key]
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var key in json){
			//var a=1-n/count;
			//var cur=start[key]+dis[key]*(1-a*a*a);
			switch(opational.type){
				case 'linear':
					var a=n/count;
					var cur=start[key]+dis[key]*a;
				break;
				case 'ease-in':
					var a=n/count
					var cur=start[key]+dis[key]*(a*a*a);
				break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[key]+dis[key]*(1-a*a*a);
				break;
				case 'ease-in-out':
				if(n/count<=0.5){
					var a=n/count*1.5;
					var cur=start[key]+dis[key]*(a*a*a);
				}else{
					move(obj,json,{time:opational.time/2,type:'ease-out',fn:opational.fn});	
				}
				break;
			}
			
			
			if(key=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+(cur*100)+')';
			}else{
				obj.style[key]=cur+'px';	
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			opational.fn && opational.fn();
		}
	},30)
}
function getStyle(obj,attr){
	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}