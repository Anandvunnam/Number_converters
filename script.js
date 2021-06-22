var from = document.getElementById("from")
var to = document.getElementById("to")
var btn = document.querySelector(".btn.btn-primary")
var showAlert = document.querySelector(".alert")
var showAlertMessage = document.querySelector(".alert .error-msg")
var input = document.getElementById("input")
var output =document.querySelector(".wrapper [readonly]")
// Event listners.
from.addEventListener("change", function () { makeAlert("none", "") })
to.addEventListener("change", function () { makeAlert("none", "") })
input.addEventListener("change", function () { makeAlert("none", "") })
btn.addEventListener("click", function () { checkErrors() })

// To display alerta and error messages.
makeAlert = (display, message) => {
    showAlert.style.display = display
    showAlertMessage.innerText = message
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
    else if(from.value === "binary" && to.value === "decimal")
    {
        var deci=binaryToDecimal()
        output.value=deci
    }
    else if (from.value === "hexadecimal" && to.value ==="decimal")
    {
        var deci=hexadecimalToDecimal()
        output.value=deci
    }
    else if (from.value === "hexadecimal" && to.value === "octal")
    {
        var deci=hexadecimalToDecimal()
        
        var octal=decimalToOctal(deci)
        output.value=octal
    }

}
function binaryToDecimal()
{
    var binary=Number(input.value)
    var rem=0
    var num=1
    var decimal=0;
    while(binary>0)
    {
        rem=binary%10
        binary=Math.floor(binary/10)
        decimal+=rem*num
        num*=2
    }
    return decimal
}
function hexadecimalToDecimal()
{
    var hexanum=input.value
    var num=1
    var decimal=0
    for(var i=hexanum.length-1;i>=0;i--)
    {
        if(hexanum[i]>='0' && hexanum[i]<='9')
        {
            decimal+=(hexanum.charCodeAt(i)-48)*num
        }
        else
        {
            decimal+=(hexanum.charCodeAt(i)-55)*num;
        }
        num*=16
    }
    return decimal
}
function decimalToOctal(decimal)
{
    var octal=0
    var rem=0
    var num=1
    while(decimal>0)
    {
        rem=decimal%8
        decimal=Math.floor(decimal/8)
        octal+=rem*num
        num*=10
    }
    return octal
}