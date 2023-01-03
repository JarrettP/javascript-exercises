const fibonacci = function(input) {
    if (input < 0) {
        return "OOPS";
    };
    
    const position = input - 1;
    let fibonacci = [1,1];

    for (let i = 0; i < position; i++) {
        fibonacci[i + 2] = fibonacci[i] + fibonacci[i + 1];
    };
    return fibonacci[position];
};

// Do not edit below this line
module.exports = fibonacci;
