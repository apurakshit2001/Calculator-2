function removeLastCharacter() {
    let result = document.getElementById('result');

    if (result.value.length > 0) {
        result.value = result.value.slice(0, -1);
    }
}

function undoLastAction() {
    let result = document.getElementById('result');

    // if (result.value)


}













// var previousValues = [];

// function appendNumber(number) {
//     var resultField = document.getElementById("result");
//     resultField.value += number;
// }

// function appendOperator(operator) {
//     var resultField = document.getElementById("result");
//     resultField.value += operator;
// }

// function calculateRoot() {
//     var resultField = document.getElementById("result");
//     var number = parseFloat(resultField.value);
//     resultField.value = Math.sqrt(number);
// }

// function deleteLastCharacter() {
//     var resultField = document.getElementById("result");
//     resultField.value = resultField.value.slice(0, -1);
// }

// function calculate() {
//     var resultField = document.getElementById("result");
//     var expression = resultField.value;
//     expression = expression.replace(/%/g, "/100");

//     try {
//         var result = eval(expression);
//         resultField.value = result;
//         previousValues.push(result);
//     } catch (error) {
//         resultField.value = "Error";
//     }
// }

// function undo() {
//     var resultField = document.getElementById("result");

//     if (previousValues.length > 0) {
//         var previousValue = previousValues.pop();
//         resultField.value = previousValue;
//     }
// }

// function clearResult() {
//     var resultField = document.getElementById("result");
//     resultField.value = "";
//     previousValues = [];
// }
