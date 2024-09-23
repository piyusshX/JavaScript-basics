const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // server ke pass value jane se rokne ke liye

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi < 18.6){
      result.innerHTML = `<span>Your BMI is ${bmi} and it seems you're underweight, So eat more!!</span>`;
    } else if (bmi > 24.9){
      result.innerHTML = `<span>Your BMI is ${bmi} and it seems you're overweight, So start working out and do more exercise</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is ${bmi} and it's in normal range</span>`;
    }
  }
});