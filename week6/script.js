var div=document.getElementById("tasks");
var divs=div.getElementsByTagName("div");
for(let i =0;i<divs.length;i++){
	divs[i].getElementsByTagName("button")[0].addEventListener("click",setDone);
}
function setDone(event){
	var element=event.currentTarget.parentNode;
	if(element.dataset.status=="done"){
		element.dataset.status="";
		element.style.text.decoration="none";
	}
	element.dataset.status="done";
}