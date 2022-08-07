var calculatorStorage = [0];
var inputValue = "";
var displayText = "";
var currentValue = "";

function calculate() {
    calculatorStorage.push(inputValue);
    inputValue = "";
    calculatorStorage = convertToNumbers(calculatorStorage);
    console.log("Pressed Equals -- Storage:" + calculatorStorage)

    var output = 0;
    if (!isOperator(calculatorStorage[1])) {
        output = calculatorStorage[1];
    }
    for (var i = 0; i < calculatorStorage.length; i++) {
        var input = calculatorStorage[i];
        output = performOperation(input, output, i);
        document.querySelector("#display").innerHTML = output;
        displayText = output;
    }
    document.getElementById("display").style.color = "lime"
    document.getElementById("display").style.flexDirection="row"
    document.querySelector("#display").innerHTML = output;
    calculatorStorage = [output];
    inputValue = output
}

function press(key) {
    document.getElementById("display").style.color = "white"
    document.getElementById("display").style.flexDirection="row-reverse"
    inputValue += ""
    if(isOperator(key)) {
        calculatorStorage.push(inputValue);
        console.log("Pressed Operator -- Current inputValue = " + inputValue +" Storage:" + calculatorStorage)
        setOP(key)
    } else if(key === '.'){
        if(inputValue && inputValue.includes('.')){
            console.log("duplicate decimal")
        } else {
            console.log("Valid decimal  Current inputValue = " + inputValue)
            displayText = displayText.toString() + key;
            document.querySelector("#display").innerHTML = displayText;
            inputValue = inputValue + key;
            console.log("Pressed Number -- Current inputValue = " + inputValue + " Storage:" + calculatorStorage)
        }
    } else {
        displayText = displayText.toString() + key;
        document.querySelector("#display").innerHTML = displayText;
        inputValue = inputValue + key;
        console.log("Pressed Number -- Current inputValue = " + inputValue + " Storage:" + calculatorStorage)
    }
}
function setOP(operator) {
    displayText = displayText+operator;
    document.querySelector("#display").innerHTML = displayText;
    calculatorStorage.push(operator);
    inputValue = "";

}
function clr() {
    document.getElementById("display").style.color = "white"
    document.getElementById("display").style.flexDirection="row-reverse"
    displayText ="";
    inputValue = "";
    calculatorStorage = [0];
    document.querySelector("#display").innerHTML = 0;
    console.log(calculatorStorage);
}

function convertToNumbers(array) {
    console.log(array);
    for (var i=0; i < array.length; i++){
        if (!isOperator(array[i])) {
            array[i] = Number(array[i]);
        }
        console.log(array);
    }
    return array;
}

function isOperator(input) {
    if (input === '+'|| input === '-'|| input === '*'|| input === '/') {
        return true
    } else {
        return false;
    }
}

function performOperation(operation, output, i) {
    if (operation === '+') {
        output += calculatorStorage[i+1];
    }
    if (operation === '-') {
        output -= calculatorStorage[i+1];
    }
    if (operation === '*') {
        output *= calculatorStorage[i+1];
    }
    if (operation === '/') {
        output /= calculatorStorage[i+1];
    }
    return output;
}
