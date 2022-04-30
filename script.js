var calculatorStorage = [0];
var inputValue = "";
var displayText = "";

function concatenateDecimals() {
    calculatorStorage[calculatorStorage.length-1] = calculatorStorage[calculatorStorage.length-1] + ".";
    var decimalValue = calculatorStorage[calculatorStorage.legnth-1];
    console.log(calculatorStorage);
}

function calculate() {
    calculatorStorage.push(inputValue);
    inputValue = "";
    
    console.log("calculating")
    calculatorStorage = convertToNumbers(calculatorStorage);
    console.log(calculatorStorage);

    var output = 0;
    if (!isOperator(calculatorStorage[1])) {
        output = calculatorStorage[1];
        console.log("Output: " + output)
    }
    for (var i = 0; i < calculatorStorage.length; i++) {
        var input = calculatorStorage[i];
        // if (input === '+') {
        //     output += calculatorStorage[i+1];
        //     console.log(output);
        //     document.querySelector("#display").innerHTML = output;
        // }
        // if (input === '-') {
        //     output -= calculatorStorage[i+1];
        //     console.log(output);
        //     document.querySelector("#display").innerHTML = output;
        // }
        // if (input === '*') {
        //     output *= calculatorStorage[i+1];
        //     console.log(output);
        //     document.querySelector("#display").innerHTML = output;
        // }
        // if (input === '/') {
        //     output /= calculatorStorage[i+1];
            // console.log(output);
            // document.querySelector("#display").innerHTML = output;
        //}
        output = performOperation(input, output, i);
        console.log(output);
        document.querySelector("#display").innerHTML = output;
        displayText = output;
    }
    document.querySelector("#display").innerHTML = output;
    //calculatorStorage = [0];
}

function press(key) {
    displayText = displayText+key;
    document.querySelector("#display").innerHTML = displayText;
    inputValue = inputValue + key;
    console.log(calculatorStorage);
}
function setOP(operator) {
    displayText = displayText+operator;
    document.querySelector("#display").innerHTML = displayText;
    calculatorStorage.push(inputValue);
    calculatorStorage.push(operator);
    console.log(calculatorStorage);
    inputValue = "";

}
function clr() {
    displayText = "";
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
