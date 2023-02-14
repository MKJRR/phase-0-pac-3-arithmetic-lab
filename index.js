function add (a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a, b){
return a * b;
}

function divide(a, b){
return a / b;
}

function increment(n){
return ++n;
}

function decrement(n){
return --n;
}

function makeInt(n){
n = parseInt(n, 10);
if (isNaN(n)) {
return Boolean;
}
return n;
}

function preserveDecimal(n){
n = parseFloat(n, 10);
if (isNaN(n)) {
return Boolean;
}
return n;
}