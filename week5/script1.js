function count(){
	var a1=document.getElementById("s11").value;
	var a2=document.getElementById("s12").value;
	var a3=document.getElementById("s13").value;
	var b1=document.getElementById("s21").value;
	var b2=document.getElementById("s22").value;
	var b3=document.getElementById("s23").value;
	var c1=document.getElementById("s31").value;
	var c2=document.getElementById("s32").value;
	var c3=document.getElementById("s33").value;
	var ans=a1*b2*c3+a2*b3*c1+a3*b1*c2-a3*b2*c1-a2*b1*c3-a1*b3*c2;
	const result=document.getElementById("result");
	result.innerHTML=""+ans;
}
const button=document.getElementById("determinant");
button.addEventListener('click',count);