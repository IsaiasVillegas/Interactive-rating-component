const btn = document.querySelector(".rating__button");
const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const number = document.querySelector(".number");
let currentNumber;

btn.addEventListener("click", function () {
  currentNumber = document.querySelector("input[name=num]:checked").value;

  number.textContent = currentNumber;
  rating.classList.add("hide");
  thankYou.classList.remove("hide");
  console.log(currentNumber);
});
