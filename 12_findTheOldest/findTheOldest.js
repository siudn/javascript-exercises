const findTheOldest = people => {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

const getAge = (birthyear, deathyear) => {
    if (!deathyear) {
        deathyear = new Date().getFullYear();
    }
    return deathyear - birthyear;
}

// Do not edit below this line
module.exports = findTheOldest;
