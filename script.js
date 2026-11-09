let counter = document.getElementById("counter");

function incrementBtn() {
  let currentValue = parseInt(counter.textContent);
  
  alert(currentValue);
  
  currentValue++;
  counter.textContent = currentValue;
}