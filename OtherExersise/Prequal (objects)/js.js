// let taxi = {
// 	make: "Webville Motors",
// 	model: "Taxi",
// 	year: 1955,
// 	color: "yellow",
// 	passengers: 4,
// 	convertible: false,
// 	mileage: 281341
// };

// function prequel(car) {
// 	if (car.mileage > 10000) {
// 		return false
// 	}else if (car.year > 1960) {
// 		return false
// 	}
// 	return true	
// };

// let worthALook = prequel(taxi);

// if (worthALook) {
// 	console.log("You gotta check out this " + taxi.make + " " + taxi.model)
// }else {
// 	console.log("You should really pass on the " + taxi.make + " " + taxi.model)
//}
/*==========Уменшение веса собаки===========*/
// let fido = {
// 	name: "Fido",
// 	weight: 48,
// 	breed: "Mixed",
// 	loves: "walks"
// };

// function loseWeight (dog, amont) {
// 		dog.weight = dog.weight - amont;
// };
// loseWeight(fido, 10);
// alert(fido.name + " now weight " + fido.weight)
/*==========Уменшение веса собаки===========*/

/*===============Подбор пароля=================*/
// function getSecret(file, secretPassword) {
// 	file.opened = file.opened + 1;
// 	if (secretPassword == file.password) {
// 		return file.content
// 	}
// 	else {
// 		return "Invalid password! No secret for you."
// 	}
// };
// function setSecret(file, secretPassword, secret) {
// 	if (secretPassword == file.password) {
// 		file.opened = 0;
// 		file.content = secret;
// 	}
// };

// let superSecretFile = {
// 	level: "classified",
// 	opened: 0,
// 	password: 2,
// 	content: "Dr. Evel's next meening is in Detroit"
// };
// let secret = getSecret(superSecretFile, 2);
// console.log(secret);

// setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia");
// secret = getSecret(superSecretFile, 2);
// console.log(secret)
/*===============Подбор пароля=================*/

/*=============Генератор машин===============*/
// function makeCar() {
	
// 	let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucher"];
// 	let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
// 	let years = [1955, 1957, 1948, 1954, 1961];
// 	let colors = ["red", "blue", "tan", "yellow", "white"];
// 	let convertible = [true, false];

// 	let rand1 = Math.floor(Math.random() * makes.length);
// 	let rand2 = Math.floor(Math.random() * models.length);
// 	let rand3 = Math.floor(Math.random() * years.length);
// 	let rand4 = Math.floor(Math.random() * colors.length);
// 	let rand5 = Math.floor(Math.random() * 5) + 1;
// 	let rand6 = Math.floor(Math.random() * 2);

// 	let car = {
// 		make: makes[rand1],
// 		model: models[rand2],
// 		year: years[rand3],
// 		color: colors[rand4],
// 		passengers: rand5,
// 		convertible: convertible[rand6],
// 		mileage: 0
// 	};
// 	return car
// };

// function displayCar(aCar) {
// 	for (let i = 0; i < 5; i++) {
// 		console.log("Your new car is " + aCar.make + " " + aCar.model + " " + aCar.year);
// 		aCar = makeCar();
// 	}
// };

// let carToSell = makeCar();
// displayCar(carToSell);
/*=============Генератор машин===============*/

/*==============Метод drive() в объекте================*/
let fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,
	start: function() {
		if (this.fuel == 0) {
			alert("The car is on empty, fill up before starting")
		}
		else {
			this.started = true
		}
	},
	stop: function(){
		this.started = false
	},
	drive: function(){
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " does zoom zoom!");
				this.fuel = this.fuel - 1;
			}
			else {
				alert("Uh oh, out of fuel.");
				this.stop();
			}
		}
		else {
			alert("You need to start the engine first.")
		}
	},
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
		alert("You fill " + amount + " liters");
	}
};
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
/*==============Метод drive() в объекте================*/

/*===========Искать ошибки============*/
// let song = {
// 	name: "Walk This Way",
// 	artist: "Run-D.M.C",
// 	minutes: 4,
// 	seconds: 3,
// 	genre: "80s",
// 	playing: false,

// 	play: function () {
// 		if (!this.playing) {
// 			this.playing = true;
// 			console.log("Playing " + this.name + " by " + this.artist)
// 		}
// 	},
// 	pause: function() {
// 		if (this.playing) {
// 			this.playing = false
// 		}
// 	}
// };
// song.play();
// song.pause();
// console.log(song.playing)
/*===========Искать ошибки============*/

/*==========Закрепление this===========*/
// let eightBall = {
// 	index: 0,
// 	advice: ["yes", "no", "maybe", "not a chance"],
// 	shake: function() {
// 		this.index = this.index + 1;
// 		if (this.index >=this.advice.length) {
// 			this.index = 0
// 		}
// 	},
// 	look: function() {
// 		return this.advice[this.index]
// 	}
// };
// for (let i = 0; i < 5; i++) {
// 	eightBall.shake();
// 	console.log( eightBall.look() );
// }

/*==========Закрепление this===========*/
