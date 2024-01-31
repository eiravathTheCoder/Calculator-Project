const btn = document.querySelector('.calculate');
console.log(btn);

btn.addEventListener('click', () => {

    const firstNum = Number(document.querySelector('#firstNumber').value);
    const secondNum = Number(document.querySelector('#secondNumber').value);
    const selectOp = document.querySelector('#operator');
    console.log(selectOp);
    const operator = document.querySelector('#operator').value;
    console.log(operator);

    let result;

    switch (operator) {
        
        case '+':
            {
                result = firstNum + secondNum;
                break;
            }

        case '-':
            {
                result = firstNum - secondNum;
                 break;
            }
        case '*':
             {
                result = firstNum * secondNum;
                 break;
            }
        case '/':
             {
                result = firstNum / secondNum;
                result = result.toFixed(3);
                break;
            }

        case '%':
               {
                result = firstNum % secondNum;
                break;
            }
        case '**':
               {
                result = firstNum ** secondNum;
                break;
            }

        default: {
            document.querySelector('.result').innerHTML=`<p style="color:red">Invalid Arithmetic Operator! </p>`;
            }
    }

    document.querySelector('.result').innerHTML=`<p style="color:red">The Result Is ${result} </p>`;
    

})