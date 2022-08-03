const findTheOldest = function(people) {


//Make a new array of everyones ages
// find the index of the largest age
// return the index of the original array to find whos the oldest. 

let ageArray = []

for (let i=0; i < people.length; i++) {

    ageArray.push(people[i].yearOfDeath - people[i].yearOfBirth)

}

console.log(ageArray)
let oldestAge = Math.max(...ageArray)

console.log(oldestAge)
let index = ageArray.indexOf(oldestAge)

      console.log(index)

let oldestPerson = people[index]
 
return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
