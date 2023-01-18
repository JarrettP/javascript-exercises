const findTheOldest = function(people) {
    
    let lastAge = 0;
    let currentAge = 0;
    let oldest = 0;
    const currentYear = new Date();

    for (let i = 0; i < people.length; i++) {
        if (!("yearOfDeath" in people[i])) {
            people[i]["yearOfDeath"] = currentYear.getFullYear();
        };

        currentAge = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
        if (currentAge > lastAge) {
            oldest = i;
        };
        lastAge = currentAge;
    };

    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;