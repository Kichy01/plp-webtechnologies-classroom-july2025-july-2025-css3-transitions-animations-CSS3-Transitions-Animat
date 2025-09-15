// Functions, Parameters & Scope

// Global variable
let animationCount = 0;

// Function with parameters & return value
function multiply(a, b) {
  return a * b;
}

// Local scope example
function logMessage(message) {
  let localVar = "I'm local!";
  console.log(message + " | " + localVar);
}

// Function to toggle class for animation
function toggleAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
  animationCount++;
  console.log(`Animation triggered ${animationCount} times.`);
}

// Combining CSS & JS

// Animate box when button clicked
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  toggleAnimation("jsBox", "animate");
});

// Popup logic
const popup = document.getElementById("popup");
document.getElementById("showPopupBtn").addEventListener("click", () => {
  popup.classList.add("show");
  logMessage("Popup opened!");
});
document.getElementById("closePopupBtn").addEventListener("click", () => {
  popup.classList.remove("show");
  logMessage("Popup closed!");
});

// Demo of parameter/return value
console.log("Multiply 5 * 3 = " + multiply(5, 3));
