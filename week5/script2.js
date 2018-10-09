function changeImg(event){
	const big=document.getElementById("bigImage");
	const bigImage=big.getElementsByTagName("img")[0];
	bigImage.src=event.currentTarget.src;
}
var imgs=document.getElementsByTagName("img");
for(var i=0;i<imgs.length;i++){
	imgs[i].addEventListener('click',changeImg);
}