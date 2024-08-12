const form = document.querySelector('form'); // Select the form element
form.addEventListener('submit',(e)=>{ // Add event listener for form submission
  e.preventDefault(); // Prevent the default form submission behavior

  const height = document.querySelector('#height').value; // Get the value of the height input
  const weight = document.querySelector('#weight').value; // Get the value of the weight input
  const result = document.querySelector('#result'); // Select the result element
  const outcome = document.querySelector('#outcome'); // Select the outcome element

  if (height==="" || height<=0 || isNaN(height)){ // Check if height is empty, zero, or not a number
    result.innerHTML="<h2>Please Enter a Valid <span> Height</span></h2>" // Display an error message for invalid height
  }
  else if (weight==="" || weight<=0 || isNaN(weight)){ // Check if weight is empty, zero, or not a number
    result.innerHTML="<h2>Please Enter a Valid <span> Weight</span></h2>" // Display an error message for invalid weight
  }
  else{
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2); // Calculate BMI using the provided formula
    let opinion;

    if (bmi < 18.5) 
      opinion="Under Weight"; // Set opinion to "Under Weight" if BMI is less than 18.5
    else if (bmi >= 18.5 && bmi < 24.9) 
      opinion="Healthy"; // Set opinion to "Healthy" if BMI is between 18.5 and 24.9
    else if (bmi >= 24.9 && bmi < 30) 
      opinion="Over Weight"; // Set opinion to "Over Weight" if BMI is between 24.9 and 30
    else if (bmi >= 30) 
      opinion="Suffering from Obesity"; // Set opinion to "Suffering from Obesity" if BMI is 30 or greater

    result.innerHTML =`<h2>Your BMI is: <span> ${bmi}</span></h2>` // Display the calculated BMI
    outcome.innerHTML =`<h2>You are <span>${opinion}</span></h2>` // Display the opinion based on BMI
  }
});
