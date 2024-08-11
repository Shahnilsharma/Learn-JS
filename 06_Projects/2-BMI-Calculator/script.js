const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#result');
  if (height==="" || height<=0 || isNaN(height)){
    result.innerHTML="<h2>Please Enter a Valid Height</h2>"
  }
  else if (weight==="" || weight<=0 || isNaN(weight)){
    result.innerHTML="<h2>Please Enter a Valid Weight</h2>"
  }
  else{
    
    const bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML =`<h2>Your BMI is: ${bmi}</h2>`
  }
});
