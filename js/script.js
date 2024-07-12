"use string";
const swiper = new Swiper(".swiper", {
   navigation: {
      nextEl: ".feedback-button-next",
      prevEl: ".feedback-button-prev",
   },
   spaceBetween: 20,
});

const timer = document.querySelector(".order__price-timer");
let timerDuration = 1800;

setInterval(() => {
   timerDuration--;
   let min = Math.trunc(timerDuration / 60);
   let seconds = timerDuration - min * 60;
   timer.textContent = `${min}:${
      seconds >= 0 && seconds <= 9 ? `0${seconds}` : seconds
   }`;
}, 1000);

const phoneInput = document.querySelector(".order__input input[type='tel']");

phoneInput.addEventListener("input", (e) => {
   e.target.value = e.target.value.replace(/\D/g, "");
});

const orderButtons = document.querySelectorAll(".order-button");
const orderSection = document.querySelector("section.order");
orderButtons.forEach((button) => {
   button.addEventListener("click", () => {
		orderSection.scrollIntoView();
	});
});
