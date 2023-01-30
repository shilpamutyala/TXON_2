let resultOutputElement = document.getElementById("resultOutput")

function display(num) {
    resultOutputElement.value += num
}

function Calculate(num) {
    try {
        resultOutputElement.value = eval(resultOutputElement.value)
    } catch (err) {
        alert("Invalid Input")
    }
}

function Clear() {
    resultOutputElement.value = ""
}

function del() {
    resultOutputElement.value = resultOutputElement.value.slice(0, -1)
}