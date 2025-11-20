let display = document.getElementById("display");

function appendValue(num) {
    if (display.textContent === "0") {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}