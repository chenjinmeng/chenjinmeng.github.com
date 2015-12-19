// JavaScript Document

//url,data,callbackkey,success,error,timeout
function jsonp(opation){
	//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=jsonp03123213123
	
	opation.data=opation.data || {};
	opation.callbackkey=opation.callbackkey || "cb";
	opation.timeout=opation.timeout || 0;
	
	var cbName="jsonp"+Math.random();
	cbName=cbName.replace(".","");
	opation.data[opation.callbackkey]=cbName;
	
	var arr=[];
	for(var key in opation.data){
		arr.push(key +"="+encodeURIComponent(opation.data[key]));
	}
	
	opation.url=opation.url+"?"+arr.join("&");
	window[opation.data[opation.callbackkey]]=function(json){
		clearTimeout(timer);
		opation.success && opation.success(json);	
		document.head.removeChild(oScript);
		window[opation.data[opation.callbackkey]]=null;
	}
	
	
	//1.创建script标签
	var oScript=document.createElement("script");
	oScript.src=opation.url;
	document.head.appendChild(oScript);
	
	if(opation.timeout){
		var timer=setTimeout(function(){
			opation.error && opation.error();
			document.head.removeChild(oScript);
			window[opation.data[opation.callbackkey]]=function (){};
		},opation.timeout)
	}
}







