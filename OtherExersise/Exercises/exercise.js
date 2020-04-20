// function whatShallWear (temp) {
// 	if (temp < 60) {
// 		console.log("Wear jacket");
// 	}
// 	else if (temp < 70) {
// 		console.log ("Wear a sweater");
// 	}
// 	else {
// 		console.log ("Wear t-shirt")
// 	}
// }
// whatShallWear(50);
// whatShallWear(80);
// whatShallWear(60);

// function doIt(param) {
// 	param = 2;
// }
// let test = 1;
// doIt(test)
// console.log (test);

/*===========Умная машина==============*/
// function clunk(times) {
// 	let num = times;
// 	while (num > 0) {
// 		display ("clunk");
// 		num--;
// 	}
// }

// function thingamajig(size) {
// 	let facky = 1;
// 	// clunkCounter = 0;
// 	if (size == 0) {
// 		display ("clank")
// 	}else if (size == 1) {
// 		display("thunk")
// 	}else {
// 		while (size > 1 ) {
// 			facky = facky * size;
// 			size--;
// 		}
// 		clunk(facky)
// 	}
// }

// function display(output) {
// 	console.log(output);
// 	clunkCounter++;
// }
// let clunkCounter = 0;
// thingamajig(5);
// console.log(clunkCounter);

/*===========Умная машина==============*/

/* =============Масиви стр. 162====================*/

// let product = ["Choo Choo Chocolate", "Ice Mint", "Cake Batter", "Bubblegum"];
// let last = product.length - 1;
// console.log (last);
// let recent = product[last];
// console.log(recent);

/* =============Масиви стр. 162====================*/

/*=============Генератор красивых фраз=============*/
function makePhrases() {
	let word1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
	let word2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	let word3 = ["process", "solution", "tipping-point", "strategy", "vision"];

	let rand1 = Math.floor(Math.random() * word1.length);
	let rand2 = Math.floor(Math.random() * word2.length);
	let rand3 = Math.floor(Math.random() * word3.length);

	let phrase = word1[rand1] + " " + word2[rand2] + " " + word3[rand3];
	console.log(phrase)	
}
makePhrases();
/*=============Генератор красивых фраз=============*/

/*==============Развлечение с магнитом===========*/

let products = ["Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];

for (let i = 0; i < hasBubbleGum.length; i++) {
	if (hasBubbleGum[i]) {
		console.log(products[i] + " contain bubble gum")
	}
}

/*==============Развлечение с магнитом===========*/

/*================Объекты===============*/

let chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
};
let cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892
};
let taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
}
/*================Объекты===============*/

/*==============Развлечение с магнитами====*/

let dog = {
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls"
};
let bark;
if (dog.weight > 20) {
	bark = "WOOF WOOF"
} else {
	bark = "woof woof"
}
let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

/*==============Развлечение с магнитами====*/
