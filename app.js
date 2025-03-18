let inp = document.querySelector("input");
let btns = document.querySelectorAll("button");

// Mapping button functions
const operations = {
    ac: () => (inp.value = ""),
    per: () => (inp.value += "%"),
    back: () => (inp.value = inp.value.slice(0, -1)),
    div: () => (inp.value += "/"),
    mul: () => (inp.value += "*"),
    sub: () => (inp.value += "-"),
    add: () => (inp.value += "+"),
    equal: () => {
        try {
            inp.value = Function('"use strict";return (' + inp.value + ')')();
        } catch {
            inp.value = "Error";
        }
    },
};

// Assigning event listeners dynamically
btns.forEach((btn) => {
    if (operations[btn.id]) {
        btn.addEventListener("click", operations[btn.id]);
    } else {
        btn.addEventListener("click", () => (inp.value += btn.id));
    }
});

// Ensuring valid input
inp.addEventListener("input", () => {
    inp.value = inp.value.replace(/[^0-9+\-*/.]/g, '');
});

// Handling "Enter" key for evaluation
inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let btn1 = document.querySelector("#equal");
        btn1.click();
    }
});
