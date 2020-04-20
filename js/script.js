function init() {
	let planet = document.getElementById("greenpalnet");
	planet.innerHTML = "Red Alert: hit by phaser fire!";
	planet.setAttribute("class", "redtext")
}
window.onload = init;