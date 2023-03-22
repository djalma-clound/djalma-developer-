const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
const nav = document.getElementById("nav");
nav.classList.toggle("active");
console.log("click");
});