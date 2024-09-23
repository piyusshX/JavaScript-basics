const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const currYear = new Date().getFullYear(); // we get the current year
console.log(currYear);

const newYearTime = new Date(`January 1 ${currYear + 1} 00:00:00`);

function updateCountdownTime () {
    const currTime = new Date();
    const diff = newYearTime - currTime; // Get the difference in ms

    const remainingDays = Math.floor(diff / 1000 / 60 / 60 / 24);
    const remainingHours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const remainingMins = Math.floor(diff / 1000 / 60) % 60;
    const remainingSecs = Math.floor(diff / 1000) % 60;

    days.innerHTML = remainingDays;
    hours.innerHTML = remainingHours < 10 ? '0' + remainingHours : remainingHours;
    min.innerHTML = remainingMins < 10 ? '0' + remainingMins : remainingMins;
    sec.innerHTML= remainingSecs < 10 ? '0' + remainingSecs : remainingSecs;
}

setInterval(updateCountdownTime, 1000);