let value = document.getElementById("value")
let value1 = parseInt(value.textContent)
function increment() {
	value1++;
	value.textContent = value1;
}