/*===========проста гра===========*/
// let randomLoc = Math.floor(Math.random() * 5);
// let location1 = randomLoc;
// let location2 = location1 + 1;
// let location3 = location2 + 1;

// let	guess;
// let hits = 0;
// let guesses = 0;

// let isSunk = false;
// while (isSunk == false) {
// 	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
// 	if (guess < 0 || guess > 6) {
// 		alert ("Please enter a valid cell number!");
// 	} else {
// 		guesses++;

// 		if (guess == location1 || guess == location2 || guess == location3) {
// 			alert("HIT!")
// 			hits++;

// 			if (hits == 3) {
// 				isSunk = true;
// 				alert("You sank my battleship!");
// 			}
// 		} else {
// 			alert("MISS");
// 		}
// 	}
// }
// let stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + ((3/guesses)*100) + "%";
// alert(stats);
// console.log (location1);
/*===========проста гра===========*/

/*===========BattleShip==========*/
let view = {
	//метод получает выводит сообщение в область сообщений
	displayMessage: function (msg) {
		let messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg
	},
	//метод выводит картинку попадания
	displayHit: function (location) {
		let cell = document.getElementById(location);
		cell.classList.add('hit');
	},
	//метод выводит картинку промаха
	displayMiss: function (location) {
		let cell = document.getElementById(location);
		cell.classList.add('miss')
	}

};

let ships = [
	{ locations: ["10", "20", "30"], hits: ["", "", ""] },
	{ locations: ["32", "33", "34"], hits: ["", "", ""] },
	{ locations: ["63", "64", "65"], hits: ["", "", "hit"] },

];



/*===========BattleShip==========*/