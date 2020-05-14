function init() {
	let planet = document.getElementById("greenpalnet");
	planet.innerHTML = "Red Alert: hit by phaser fire!";
	planet.setAttribute("class", "redtext")
}
window.onload = init;

/*=============typeOf=============*/
let test1 = "abcdef";
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = { "abcdef": 123 };
let test8 = ["abcdef", 123];
function test9() {
	return "abcdef"
};
let test10 = null;

console.log(typeof test1); //string
console.log(typeof test2); //number
console.log(typeof test3); //boolean
console.log(typeof test4); //object
console.log(typeof test5); //object
console.log(typeof test6); //undefined
console.log(typeof test7); //object
console.log(typeof test8); //object
console.log(typeof test9); //function
console.log(typeof test10) //object

/*=============typeOf=============*/

if (99 == "99") {
	console.log("A number equals a string")
} else {
	console.log("No way a number equals a string")
};
/*============================================*/
function find(car) {
	for (let i = 0; i < lot.length; i++) {
		if (car === lot[i]) {
			return i
		}
	}

	return -1
};


let chevy = {
	make: "Chevy",
	model: "Bel Air"
};
let taxi = {
	make: "Webville",
	model: "Taxi"
};
let fiat1 = {
	make: "Fiat",
	model: "500"
};
let fiat2 = {
	make: "Fiat",
	model: "500"
};
let lot = [chevy, taxi, fiat1, fiat2];
console.log("Find Car:" + find(fiat2));
console.log("Find Car:" + find(taxi));
console.log("Find Car:" + find(chevy));
console.log("Find Car:" + find(fiat1));

/*==========LieDetector================*/
function lieDetectorTest() {
	let lies = 0;

	let stolenDiamond = {};
	if (stolenDiamond) {
		console.log("You stole the diamond");
		lies++;
	};
	let car = {
		keyInPocket: null
	};
	if (car.keyInPocket) {
		console.log("Uh oh, guess you stole the car!");
		lies++;
	};
	if (car.emptyGasTank) {
		console.log("You drove the car after you stole it");
		lies++;
	}
	let foundYouAtTheCrimeScene = [];
	if (foundYouAtTheCrimeScene) {
		console.log("A sure sing of guilt");
		lies++
	};
	if (foundYouAtTheCrimeScene[0]) {
		console.log("Caught with a stolen item!");
		lies++;
	};
	let yourName = " ";
	if (yourName) {
		console.log("Guess you lied about your name");
		lies++
	}
	return lies
};
let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
	console.log("Guilty as charged");
}

/*==========LieDetector================*/

/*==============метод toLowerCase()====*/
let text = "YOU SHOULD NEVER SHOT";
let presentableText = text.toLowerCase(); //нижній регістр для тексту
if (presentableText.length > 0) {
	//alert(presentableText);
	//alert(presentableText.length)
}
/*==============метод toLowerCase()====*/

/*==============method charAt=========*/
/*Отримує ціле число від 0 до довжини рядку (мінус 1) і повертає строку з одними симовлом*/

let input = "jenny@wickedlysmart.com";
for (let i = 0; i < input.length; i++) {
	if (input.charAt(i) === "@") {
		console.log("There's an @ sign at index " + i) // поверне @
	}
}
/*==============method charAt=========*/

/*============метод indexOf()========*/
/*Отримує строку-аргумент і повертає індекс першого символу першого входження аргументу*/

let phrase = "the cat in the hat";
let index = phrase.indexOf("cat"); //показує індекс першої букви слова "cat"
console.log(index); // 4
index = phrase.indexOf("the", 5); //пошук почанається з 5 індексу
console.log(index); // 11
index = phrase.indexOf("dog");
console.log(index) // -1

/*============метод indexOf()========*/

/*============метод subString()========*/
/*Отримує 2 індекси, після чого витягує і повертає заключену між ними строку*/

let data = "name|phone|address";
let val = data.substring(5, 10); //починаючи з індексу 5 і закінчується індексо 10 (не включаючи його)
console.log(val); //
/*============метод subString========*/

/*============метод split()========*/
/*Отримує симовол-обмежувач та розбиває строку на частини по позиції обмежувачу*/

let data1 = "name|phone|address";
let vals = data1.split("|");
console.log(vals) // масив [name, phone, address]
/*============метод split()========*/

/*========instanceof========*/
function Duck(sound) {
	this.sound = sound;
	this.quack = function () {
		console.log(sound)
	}
};
let toy = new Duck("quack quack");
toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);
/*========instanceof========*/