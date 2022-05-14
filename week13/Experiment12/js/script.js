var count=1;
var mytime;
function showImg(id){
	var pic= document.getElementById("pic");
	count++;
	if(id>0){
		clearInterval(mytime);
		count=id;
	}
	if(count>2){
		count=1;
	}
	pic.src="images/ad_"+count+".jpg";
	for(var i=1; i<=2;i++){
		if(count==i){
			document.getElementById("num"+i).style.backgroundColor="orange";
		}else{
			document.getElementById("num"+i).style.backgroundColor="#ccc";
		}
	}
}
function showOut(){
	clearInterval(mytime);
		mytime=setInterval("showImg(0)",1000);
}
mytime=setInterval("showImg(0)",1000);
