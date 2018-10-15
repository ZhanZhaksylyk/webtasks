let cars = [{brand:'Toyota',model:'Camry','year':1999,price:20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];
var dollarIcon="https://static.thenounproject.com/png/449456-200.png";
var basketIcon="http://cdn.onlinewebfonts.com/svg/img_460503.png";

var divCars= document.getElementById("cars");
var items=document.getElementById('items');
var sum=document.getElementById('sum');
var it=0;
var s=0;

for (var i = cars.length - 1; i >= 0; i--) {
	var div =document.createElement('div');
	var img =document.createElement('img');
	var basket =document.createElement('img');
	var price=cars[i].price;

	img.src=cars[i].image_url;
	img.style.width="100px"

	basket.src=basketIcon;
	basket.style.width="30px";
	basket.classList.add('basket');

	div.appendChild(img);
	div.appendChild(basket);
	div.classList.add('card');

	divCars.appendChild(div);

	basket.addEventListener("click",func);

	function func(event){
		if (event.currentTarget.src==basketIcon) {
			event.currentTarget.src=dollarIcon;
			it+=1;
			s+=price;
		}
		else{
			event.currentTarget.src=basketIcon;
			it-=1;
			s-=price;
		}
		items.innerHTML=it;
		sum.innerHTML=s;
	}
}