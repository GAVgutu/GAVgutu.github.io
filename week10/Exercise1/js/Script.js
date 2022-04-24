// 问候
function hei(s){
	if(s=="先生"){
		alert("你好先生");
	}else{
		alert("你好女士");
	}
}

// 放大缩小
function Change(m){
	if(m==0){
		box.style.height="250px";
		box.style.width="250px";
		box.style.backgroundColor="#123456";
		p.style.color="#fff";
	}else{
		box.style.height="100px";
		box.style.width="100px";
		box.style.backgroundColor="#006d00";
		p.style.color="#fff";
	}
}

// 背景颜色修改
function back(b){
	if(b==0){
		document.body.style.backgroundColor="#ff0000";
	}else if(b==1){
		document.body.style.backgroundColor="#231dc3";
	}else if(b==2){
		document.body.style.backgroundColor="#ffff00";
	}else if(b==3){
		document.body.style.backgroundColor="#74d3ff";
	}else if(b==4){
		document.body.style.backgroundColor="#00aa00";
	}
}