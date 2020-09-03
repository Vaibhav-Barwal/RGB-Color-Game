var numCircle = 6;
var colors = [];
var pickedColor;
var circle = document.querySelectorAll(".circle");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numCircle = 3: numCircle = 6;
			reset();
		});
	}

	for(var i = 0; i < circle.length; i++){
	//add click listeners to circles
	circle[i].addEventListener("click", function(){
		//grab color of clicked circle
		var clickedColor = this.style.background;
		//compare color to pickedColor Var
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			p.style.background = clickedColor;
		} else {
			this.style.background = "#000000";
			messageDisplay.textContent = "TRY AGAIN!";
		}
	});
}

reset();
}

function reset(){
	colors = generateRandomColors(numCircle);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
// when play again is clicked the "correct" message goes away
	messageDisplay.textContent = "";
	// Change colors of squares
	for(var i = 0; i < circle.length; i++){
		if(colors[i]){
			circle[i].style.display = "block";
			circle[i].style.background = colors[i];
		} else {
			circle[i].style.display = "none";
		}
	}
	h1.style.background = "#000000";
	p.style.background = "#000000";
}


// Reset Button
resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color){
	//loop through all circles
	for(var i = 0; i < circle.length; i++){
	// change each color to match given color
	circle[i].style.background = color;
	}
}

function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
//make an array
var arr = []
// repeat num times
for(var i = 0; i < num; i++){
	// get random color and push into array
	arr.push(randomColor());
}
// return that array
return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue"from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}