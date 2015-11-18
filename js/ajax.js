// JavaScript Document


function ajax(url,data,type,success,error,timeout){
	
	
	//1.创建ajax对象
	
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP')	
	}
	
	
	//2.连接
	//3.发送
	if(type=='get'){
		oAjax.open('get',url,true);
		oAjax.send();
	}else{
		oAjax.open('post',url);
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
		oAjax.send(str)			
	}
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
				success && success(oAjax.responseText);
			}else{
				error && error(status)	
			}
		}	
	}
	
	
	
	
		
}














