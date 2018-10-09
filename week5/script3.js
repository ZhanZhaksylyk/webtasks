function addStudent(){
	var name=document.getElementById("name");
	var surname=document.getElementById("surname");
	var selector=document.getElementById("faculty");
	var faculty=selector.options[selector.selectedIndex];
	var allow=0;
	if(surname.value==""){
		surname.style.border="2px solid red";
	}
	else{
		surname.style.border="1px solid black";
		allow+=1;
	}
	if(name.value==""){
		name.style.border="2px solid red";
	}
	else{
		name.style.border="1px solid black";
		allow+=1;
	}
	if(faculty.text=="Select Faculty"){
		alert("SELECT FACULTY");
	}
	else{
		allow+=1;
	}
	if(allow==3){
		var doc=document.getElementById("students");
		doc.innerHTML=doc.innerHTML+"<tr><td>"+name.value+"</td><td>"+surname.value+"</td><td><strong>"+faculty.text+"</strong></td></tr>";
	}
}

var stat = document.getElementById("addStudent");
stat.addEventListener('click',addStudent);