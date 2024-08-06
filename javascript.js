const buttons = document.querySelectorAll('.button')
//console.log(buttons);
const body = document.querySelectorAll('body');
buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "gray") {
            body.style.backgroundColor = "gray"
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = "blue"
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow"
        }
        if (e.target.id === "red") {
            body.style.backgroundColor = "red"
        }
    }) 
})