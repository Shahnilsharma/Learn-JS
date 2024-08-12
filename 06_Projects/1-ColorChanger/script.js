// Select all elements with the class 'button' and store them in the 'buttons' variable
const buttons = document.querySelectorAll('.button');

// Select the <body> element and store it in the 'body' variable
const body = document.querySelector('body');

// Iterate over each button
buttons.forEach((btn)=>{
    console.log(btn);

    // Add a click event listener to each button
    btn.addEventListener('click',(e)=>{
        switch (e.target.id){
            // If the button with id 'red' is clicked, change the background color of the body to red
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;

            // If the button with id 'blue' is clicked, change the background color of the body to blue
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;

            // If the button with id 'green' is clicked, change the background color of the body to green
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;

            // If the button with id 'yellow' is clicked, change the background color of the body to yellow
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;

            // If the button with id 'white' is clicked, change the background color of the body to white
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;

            // If the button with id 'pink' is clicked, change the background color of the body to pink
            case 'pink':
                body.style.backgroundColor = e.target.id;
                break;
        }
    })
})