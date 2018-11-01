var button=document.getElementsByTagName("button")[0];
var cards=document.getElementById("cards");
var data;
button.addEventListener("click",functionButton);
function functionButton(){
	cards.innerHTML='<img width="300px" height="200px" id="loading" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>';
	var img=document.getElementById("loading");
	img.style.display="block";
		if(navigator.onLine==false){
			button.innerHTML="No internet connection";
		}
		else{
			button.innerHTML="Load";
			fetch("http://demo4296963.mockable.io/listCars")
			.then(onResponse,onError)
			.then(onResponseReady);
		}
	}
function onResponse(response){
		return response.json();
	}
function onError(error){
		console.log("ERROR ocured: "+error);
	}
function onResponseReady(json){
	var img=document.getElementById("loading");
	img.style.display="none";
	for(let i=0;i<json.length;i++){
		var divka=document.createElement("div");
		divka.id="divka";
		var text = document.createElement("div");
		var price= document.createElement("div");
		
		text.innerHTML=json[i].maker+" "+json[i].model;
		price.innerHTML=json[i].price;
		
		divka.className="card";
		price.className='price';
		text.className='title';
		
		divka.appendChild(text);
        divka.appendChild(price);

		cards.appendChild(divka);
	}
}
