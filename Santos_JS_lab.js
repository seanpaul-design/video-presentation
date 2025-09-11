let name = "Sean Paul";
let age = 21;

function greetUser(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greetUser(name, age));
document.getElementById("greeting").textContent = greetUser(name, age);

const button = document.getElementById("colorBtn");
const colorDisplay = document.getElementById("colorCode");

function getRandomColor() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color = color.padStart(7, "#0");
  return color;
}

button.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorDisplay.textContent = `Background color: ${newColor}`;
});

button.addEventListener("click", () => {
  console.log("🔵 Button clicked! Generating new color...");
  const newColor = getRandomColor();
  console.log(`🟢 New color generated: ${newColor}`);
  document.body.style.backgroundColor = newColor;
  colorDisplay.textContent = `Background color: ${newColor}`;
  console.log("✅ Background color applied successfully!");
});
