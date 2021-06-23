var from = document.getElementById("from")
var to = document.getElementById("to")
var btn = document.querySelector(".btn.btn-primary")
var showAlert = document.querySelector(".alert")
var showAlertMessage = document.querySelector(".alert .error-msg")
var input = document.getElementById("input")
var output = document.querySelector(".wrapper [readonly]")
// Event listners.
from.addEventListener("change", function () { makeAlert("none", "") })
to.addEventListener("change", function () { makeAlert("none", "") })
input.addEventListener("change", function () {
    makeAlert("none", "")
    output.value = ""
})
btn.addEventListener("click", function () { checkErrors() })

// To display alerta and error messages.
makeAlert = (display, message) => {
    showAlert.style.display = display
    showAlertMessage.innerText = message
}


convertNumbers = (from, to, input) => {
    var fromToString = from + to
    switch (fromToString) {
        case 'decimalbinary':
            output.value = decimalToBinary(input); break;
        case 'decimaloctal':
            output.value = decimalToOctal(input); break;
        case 'decimalhexadecimal':
            output.value = decimalToHexadecimal(input); break;
        case 'binarydecimal':
            output.value = binaryToDecimal(input); break;
        case 'binaryoctal':
            output.value = binaryToOctal(input); break;
        case 'binaryhexadecimal':
            output.value = binaryToHexadecimal(input); break;
        case 'octaldecimal':
            output.value = octalToDecimal(input); break;
        case 'octalbinary':
            output.value = octalToBinary(input); break;
        case 'octalhexadecimal':
            output.value = octalToHexadecimal(input); break;
        case 'hexadecimaldecimal':
            output.value = hexadecimalToDecimal(input); break;
        case 'hexadecimalbinary':
            output.value = hexadecimalToBinary(input); break;
        case 'hexadecimaloctal':
            output.value = hexadecimalToOctal(input); break;
        default: makeAlert("block", "Invalid Conversion!")
    }
}


// Check various errors and display alerts
function checkErrors() {
    if (from.value === to.value) { // if both values are same 
        makeAlert("block", "From and To values cannot be same.")
    }

    else if (from.value === "From" || to.value === "To") { // if both values are set to initial ones.
        makeAlert("block", "Please select the conversions.")
    }
    else if (input.value === "") { // if input is empty
        makeAlert("block", "Enter any input value to convert")
    }
    else {
        convertNumbers(from.value, to.value, input.value)
    }
}


function binaryToDecimal(binaryNumber) {
    var rem = 0
    var num = 1
    var decimal = 0;
    while (binaryNumber > 0) {
        rem = binaryNumber % 10
        binaryNumber = Math.floor(binaryNumber / 10)
        decimal += rem * num
        num *= 2
    }
    return decimal
}

function hexadecimalToDecimal(number) {
    var hexanum = number
    var num = 1
    var decimal = 0
    for (var i = hexanum.length - 1; i >= 0; i--) {
        if (hexanum[i] >= '0' && hexanum[i] <= '9') {
            decimal += (hexanum.charCodeAt(i) - 48) * num
        }
        else {
            decimal += (hexanum.charCodeAt(i) - 55) * num;
        }
        num *= 16
    }
    return decimal
}

function decimalToOctal(decimal) {
    var octal = 0
    var rem = 0
    var num = 1
    while (decimal > 0) {
        rem = decimal % 8
        decimal = Math.floor(decimal / 8)
        octal += rem * num
        num *= 10
    }
    return octal
}

function decimalToBinary(number) {
    var pattern = /[0-9]*/g
    if (number !== pattern.exec(number)[0]) return makeAlert("block", "Decimal range should be in [0-9].")
    var result = 0
    var place = 0
    while (number > 0) {
        result += Math.pow(10, place++) * (number % 2)
        number = Math.floor(number / 2)
    }
    return result
}

function decimalToHexadecimal(number) {
    var result = new Array()
    let i = 0
    while (number > 0) {
        result[i++] = number % 16
        number = Math.floor(number / 16)
    }
    hexValue = ""
    for (let j = result.length - 1; j >= 0; j--) {
        hexValue += (result[j] < 10) ? String.fromCharCode(result[j] + 48) : String.fromCharCode(result[j] + 55)
    }
    return hexValue
}

function octalToDecimal(number) {
    var pattern = /[0-7]+/g
    if (number !== pattern.exec(number)[0]) {
        return makeAlert("block", "Octal digit range should be [0-7]")
    }
    let result = 0, place = 0
    while (number > 0) {
        result += (number % 10) * (Math.pow(8, place++))
        number = Math.floor(number / 10)
    }
    return result
}

