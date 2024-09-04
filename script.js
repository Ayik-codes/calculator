let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML === '='){
            string = string.replace(/x/g, '*');  
            string = calculate(string);   
            input.value = string;
        }

        else if(e.target.innerHTML === 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});


function calculate(expression) {
    try {
        let result = new Function('return ' + expression)();   
        return result;
    } catch (error) {
        return "0";
    }
 }
