const currDisplay= document.querySelector(".curr-Display");
const prevDisplay= document.querySelector(".prev-Display");
const numbers= document.querySelector(".number");
const operands = document.querySelector(".opeartion");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".button");
const equalBtn = document.querySelector(".equal");
let opeartion;

function appendNumber(number){
if(number==="." && currDisplay.innerText.includes("."))return;
currDisplay.innerText += number;
}

function chooseOperation (operand){
    if (currDisplay.innerText === "") return;
    compute(operand);
    opeartion=operand;
    currDisplay.innerText+=operand;
    prevDisplay.innerText=currDisplay.innerText;
    currDisplay.innerText="";
} 

function clearDisplay(){
currDisplay.innerText= "";
prevDisplay.innerText= "";
}

function compute(Operand){
    let result;
    const previousValue= parseFloat(prevDisplay.innerText);
    const currentValue= parseFloat(currDisplay.innerText) 

if(isNaN(previousValue) || isNaN(currentValue)) return;

switch (opeartion){
    case "+":
        result= previousValue+currentValue;
        break;

        case "-":
        result= previousValue-currentValue;
        break;

        case "*":
        result= previousValue*currentValue;
        break;

        case "/":
        result= previousValue/currentValue;
        break;
        default:
        return;
}

currDisplay.innerText=result;
}

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
    appendNumber(number.innerText);
});
});

operands.forEach((operand)=>{
    operand.addEventListener("click", ()=>{
    chooseOperation(operand.innerText);
});
});

clearBtn.addEventListener("click", ()=>{
    clearDisplay();
});

equalBtn.addEventListener("click", ()=>{
    compute();
    prevDisplay.innerText = "";
});

delBtn.addEventListener("click",()=>{
    currDisplay.innerText = currDisplay.innerText.slice(0,-1);
});




