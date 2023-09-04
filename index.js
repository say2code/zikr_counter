let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetBtn = document.getElementById("reset-btn");
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous zikr: ";
}

// Attach an event listener to the reset button
resetBtn.addEventListener("click", reset);
