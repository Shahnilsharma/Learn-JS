const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',(e)=>{
        switch (e.target.id){
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'pink':
                body.style.backgroundColor = e.target.id;
                break;
           
        }
    })
})