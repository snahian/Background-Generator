var cssCode = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButton = document.querySelector("#random");

updateColor();

color1.addEventListener("input", updateColor);

color2.addEventListener("input", updateColor);

function updateColor () {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	updateText();
}

function updateText () {
	cssCode.textContent = body.style.background + ";";
}

randomButton.addEventListener("click", randomBackground);

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function randomBackground () {
	var rand_color1 = getRandomColor();
	var rand_color2 = getRandomColor();

	color1.value = rand_color1;
	color2.value = rand_color2;

	updateText();

	body.style.background = "linear-gradient(to right, " + rand_color1 + "," + rand_color2 + ")";
}