const findTheOldest = function (people) {


    //Make a new array of everyones ages
    // find the index of the largest age
    // return the index of the original array to find whos the oldest. 
    const today = new Date()
    const year = today.getFullYear()


    const newPeople = people.map(person => {
        if (person.yearOfDeath == null) {
            return { ...person, yearOfDeath: year }
        } else {
            return person
        }
    })


    let ageArray = []
    for (let i = 0; i < newPeople.length; i++) {
        ageArray.push(newPeople[i].yearOfDeath - newPeople[i].yearOfBirth)
    }


    let oldestAge = Math.max(...ageArray)
    let index = ageArray.indexOf(oldestAge)
    let oldestPerson = people[index]


    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
