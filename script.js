var calculatorStorage = [0];
var inputValue = "";
var displayText = "";
var result = 0;

// function concatenateDecimals() {
//     calculatorStorage[calculatorStorage.length-1] = calculatorStorage[calculatorStorage.length-1] + ".";
//     var decimalValue = calculatorStorage[calculatorStorage.legnth-1];
//     console.log(calculatorStorage);
// }

function calculate() {
    calculatorStorage.push(inputValue);
    inputValue = "";
    calculatorStorage = convertToNumbers(calculatorStorage);

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
    document.querySelector("#display").innerHTML = output;
    console.log("Output: " + output)
    result = output
    console.log("Result: " + result)
}

function press(key) {
    if(isOperator(key)) {
        setOP(key)
    } else {
        displayText = displayText.toString() + key;
        document.querySelector("#display").innerHTML = displayText;
        inputValue = inputValue + key;
        console.log("Pressed Number -- Storage:" + calculatorStorage)
    }
}
function setOP(operator) {
    displayText = displayText+operator;
    document.querySelector("#display").innerHTML = displayText;
    calculatorStorage.push(inputValue);
    calculatorStorage.push(operator);
    inputValue = "";
    console.log("Pressed Operator -- Storage:" + calculatorStorage)

}
function clr() {
    displayText ="";
    inputValue = "";
    result = 0;
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
    if (input === '+'|| input === '-'|| input === '*'|| input === '/' || input == '.') {
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
