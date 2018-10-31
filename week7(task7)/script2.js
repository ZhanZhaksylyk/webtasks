var button=document.getElementsByTagName("button")[0];
var sortByMaker= document.getElementById("sortByMaker");
var sortByPrice= document.getElementById("sortByPrice");
var cards=document.getElementById("cards");
var img=document.getElementById("loading");
var data;
button.addEventListener("click",functionButton);
function functionButton(){
		changeDisplay("on");
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
	if(cards.textContent.isEmpty){
		for(let i=0;i<json.length;i++){
			var divka=document.createElement("div");
			var text = document.createElement("div");
			var price= document.createElement("div");
			
			text.innerHTML=json[i].maker+" "+json[i].model;
			price.innerHTML=json[i].price;
			
			divka.className="card";
			price.className='price';
			text.className='title';
			
			divka.appendChild(text);

			cards.appendChild(divka);
		}
	}
	else{
		changeDisplay("off")
	}
}
function changeDisplay(string){
		if(string=='off'){
			img.style.display="none";
			cards.style.display='block';
		}
		else{
			img.style.display="block";
		}
	}
function sortByPrice(){
		console.log(data);
	}