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