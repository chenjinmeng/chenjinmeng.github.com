// JavaScript Document



function ajax(opations){
	//整理数据
	opations=opations || {};
	if(!opations.url){
		return;	
	}
	opations.type=opations.type || 'get';
	opations.timeout=opations.timeout || 0;
	opations.data=opations.data || {};
	opations.success=opations.success || null;
	opations.error=opations.error || null;
	var arr=[];
	for(var key in opations.data){
		arr.push(key+'='+encodeURIComponent(opations.data[key]));
	}
	var str=arr.join('&');
		//1.创建
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
		//2.连接
		//3.请求
	if(opations.type=='get'){
		oAjax.open('get',opations.url+'?'+str,true);
		oAjax.send();
	}else{
		oAjax.open('post',opations.url,true);	
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		//oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		oAjax.send(str);
	}
	
	//4.接受数据
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			clearTimeout(timer);
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
					opations.success && opations.success(oAjax.responseText);
			}else{
					opations.error && opations.error(oAjax.status);
			}
		}	
	}
	if(opations.timeout){
		var timer=setTimeout(function(){
			alert('请求超时了')
			oAjax.abort();	
		},opations.timeout)
	}
}


