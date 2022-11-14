const removeFromArray = function(...args) {

    for (j = 1;j <= args.length - 1; j++) {
        for (i = 0; i <= args[0].length - 1; i++) {
            if (args[0][i] === args[j]) {
                args[0].splice(i,1);
            };
        };
    };
    
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
