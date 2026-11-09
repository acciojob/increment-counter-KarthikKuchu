let counter = document.getElementById("counter")
let value1 = parseInt(counter.textContent)
function incrementBtn() {
	value1++;
	counter.textContent = value1;
}