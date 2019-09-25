
function rng() {
	var x = Math.floor((Math.random() * 10) + 1);
	return(x)
}

function HotelConstructor(name) {
	this.name = name;
	this.nightsAvailable = rng();
	}

var fourSeasons = new HotelConstructor('Four Seasons');
var motelOne = new HotelConstructor('Motel One');
var hilton = new HotelConstructor('Hilton');

console.log(fourSeasons);
console.log(motelOne);
console.log(hilton);

var NightsToStay;

function getNights() {
	NightsToStay = document.getElementById('fourseasons-nightsToStay').value;
	console.log(NightsToStay);
}

var input1 = document.getElementById('fourseasons-nightsToStay');
input1.addEventListener('input', getNights, false);

console.log(NightsToStay);

function availability(x) {

var hotel = x;
console.log(hotel);
var elementNode = NightsToStay;
elementNode = parseInt(elementNode);

var btn = "<input type='submit' id='reserveButton' value='I will reserve'>";

if (isNaN(elementNode) == true || elementNode > 10 || elementNode < 1) {
	document.getElementById('first').innerHTML = "";
	alert("Please input a number from 1-10!");
	return;
}

switch (hotel) {
	case 1:
		var available = fourSeasons.nightsAvailable - elementNode;
		if (available >= 0) {
			console.log(btn)
		document.getElementById('first').innerHTML = btn;
			} else {
		document.getElementById('first').innerHTML = "";		
		alert("Sorry, no free room for " + elementNode + " nights. But you can stay for " + fourSeasons.nightsAvailable + " nights.");
			}
		break;
	case 2:
		var available = motelOne.nightsAvailable - elementNode;	
		if (available >= 0) {
		document.getElementById('second').appendChild(btn);
			} else {
		document.getElementById('first').innerHTML = "";
		alert("Sorry, no free room for " + elementNode + " nights. But you can stay for " + motelOne.nightsAvailable + " nights.");
			}
		break;
	case 3:
		var available = hilton.nightsAvailable - elementNode;	
		if (available >= 0) {
		document.getElementById('third').appendChild(btn);
			} else {
		document.getElementById('first').innerHTML = "";
		alert("Sorry, no free room for " + elementNode + " nights. But you can stay for " + hilton.nightsAvailable + " nights.");
			}		
		break;
}
}

var input1 = document.getElementById('subButton1');
input1.addEventListener('click', function() {availability(1)});

var input2 = document.getElementById('subButton2');
input2.addEventListener('click', function() {availability(2)});

var input3 = document.getElementById('subButton3');
input3.addEventListener('click', function() {availability(3)});




/*var fourSeasons = new HotelConstructor('Four Seasons',  )*/


/*User inputs number of nights to stay at hotel 
Results: is Hotel available or not? If not: output how many nights he can stay
for each hotel generate random number of available nights (1-10)
IF available: provide button "I will reserve", ELSE: "Sorry, no free room for (number of nights) nights
style the program with colors #003580, #FFFFFF, #E9F0FA*/