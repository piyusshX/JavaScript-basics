const clock = document.getElementById('clock');
setInterval(function(){ // this method runs the function again-n-again after an given interval
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
},1000); // 1000ms -> 1sec