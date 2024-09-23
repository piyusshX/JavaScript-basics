// random color genrator 
const randomColor = function () {
    const hex = "0123456789ABCDEF"; // hex values
    let color = "#"; // for getting color we'll apply loop on hex
    for (let i = 0; i < 6; i++) { // this loop will append 6 random hex vals in color
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  const startChangingColor = function () {
    if (!intervalId) { // setInterval() -> changeBgColor() ko execute karega bar-bar
      intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
      document.querySelector("body").style.backgroundColor = randomColor();
    }
  }
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // for clearing the memory
  }
  
  document.querySelector("#start").addEventListener('click', startChangingColor);
  document.querySelector("#stop").addEventListener('click', stopChangingColor);