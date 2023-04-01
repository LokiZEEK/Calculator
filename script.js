const result = document.getElementById('result')

function clearScreen() {
    result.value = ""
    console.log("Cleared!")
}

function display(value) {
   result.value += value;
}

function calculate() {
    var p = result.value
    var q = eval(p)
    result.value = q;
}

document.addEventListener('keydown', function(event) {
    if(event.key == "c") {
        clearScreen();
    }
   
});