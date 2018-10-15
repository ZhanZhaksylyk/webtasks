let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

for (var i = countries.length - 1; i >= 0; i--) {
	var option=document.createElement("option");
	option.innerHTML=countries[i];
	document.getElementById("countries").appendChild(option);
}
var select=document.getElementById("countries");
select.addEventListener("change",change);
function change(){
	var selectedCountry=select.value;
	var cities=document.getElementById("cities");
	if(selectedCountry=="Select country"){
		cities.innerHTML='<option>Select city</option>';
	}
	else{
		cities.innerHTML='';
	}
	for (var i = cities_by_country[selectedCountry].length - 1; i >= 0; i--) {
		var option=document.createElement("option");
		option.innerHTML=cities_by_country[selectedCountry][i];
		cities.appendChild(option);
	}

}