const sumAll = function(startNum, endNum) {
    let output = 0;

    switch (true) {
        case typeof startNum != 'number':
        case typeof endNum != 'number':
        case startNum < 0:
        case endNum < 0:
            return 'ERROR';
        case startNum > endNum:
            [startNum, endNum] = [endNum, startNum];
            break;
    };
    
    for (i = startNum; i <= endNum; i++) {
        output = output + i
    };

    return output;
};

// Do not edit below this line
module.exports = sumAll;
