document.getElementById("one").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 1;
});

document.getElementById("two").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 2;
});

document.getElementById("three").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 3;
});

document.getElementById("four").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 4;
});

document.getElementById("five").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 5;
});

document.getElementById("six").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 6;
});

document.getElementById("seven").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 7;
});


document.getElementById("eight").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 8;
});


document.getElementById("nine").addEventListener("click", function(){
	if(	document.getElementById("displayNum").innerHTML == 0){
		document.getElementById("displayNum").innerHTML = " ";
	}
	document.getElementById("displayNum").innerHTML += 9;
});

document.getElementById("reset").addEventListener("click", function(){
	document.getElementById("displayNum").innerHTML = 0;
});

document.getElementById("removeLast").addEventListener("click", function(){
	let a = document.getElementById("displayNum").innerHTML;
	if(a==0 || a.length==1){
		document.getElementById("displayNum").innerHTML = 0;
	}else{
	let b = a.toString(); 
	b = b.substring(0, b.length - 1);
	let c = parseInt(b);
	document.getElementById("displayNum").innerHTML = c;
	}
});

document.getElementById("plus").addEventListener("click", function(){
	document.getElementById("displayNum").innerHTML += "+";
});


document.getElementById("minus").addEventListener("click", function(){
	document.getElementById("displayNum").innerHTML += "-";
});

document.getElementById("muliply").addEventListener("click", function(){
	document.getElementById("displayNum").innerHTML += "*";
});

document.getElementById("divide").addEventListener("click", function(){
	document.getElementById("displayNum").innerHTML += "/";
});

document.getElementById("equal").addEventListener("click", function(){
	let a = document.getElementById("displayNum").innerHTML;
	let b = eval(a);
	document.getElementById("displayNum").innerHTML = b;
});

