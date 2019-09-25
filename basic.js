/*Basic Exercise 1*/

function currentAge(birthyear) {
	var dateToday = new Date().getFullYear();
	document.write(dateToday - birthyear + "<br>");
}

currentAge(1990);

/*Basic Exercise 2*/

function cut(string, x) {
	document.write(string.substring(0,x));
}

cut('I am a hero of World of Warcraft', 12);

/*Cooler version*/

function cutAgain(string, x) {
	var arr = string.split("");
	var out = [];
	
	for (i=0;i<x;i++) {
		out += arr[i];
	}

	document.write(out + "<br>");
}

cutAgain('I am a hero of World of Warcraft', 12)

/*Basic Exercise 3*/

function PersonConstructor(na, sna, ae, description) {
	this.name = na;
	this.surname = sna;
	this.age = ae;
	this.desc = description;
}


function info(na, sna, ae, description) {
	var output = new PersonConstructor(na, sna, ae, description);
	document.write("Hi I am " + output.name + " " + output.surname + " I am " + output.age + " years old and I am a " + output.desc + ".");
}

info('John', 'Doe', 25, 'future programmer');